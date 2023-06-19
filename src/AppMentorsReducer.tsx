import React, { useReducer, useState } from 'react';

type Person = {
    name: string;
    title: string;
    mentors: {
        name: string;
        title: string;
    }[];
};

type Action =
    | { type: 'UPDATE'; prev: string; cur: string }
    | { type: 'ADD'; name: string; title: string }
    | { type: 'DELETE'; name: string };

const initValue = {
    name: '지운',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어 개발자',
        },
        {
            name: '제임스',
            title: '시니어 개발자',
        },
    ],
};

const PersonReducer = (person: Person, action: Action) => {
    switch (action.type) {
        case 'UPDATE': {
            const { prev, cur } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if (prev && cur && mentor.name === prev) {
                        return { ...mentor, name: cur };
                    }
                    return mentor;
                }),
            };
        }
        case 'ADD': {
            const { name, title } = action;
            return {
                ...person,
                mentors: [...person.mentors, { name, title }],
            };
        }
        case 'DELETE': {
            const { name } = action;
            return {
                ...person,
                mentors: person.mentors.filter(
                    (mentor) => mentor.name !== name
                ),
            };
        }
    }
};

export const AppMentorsReducer = () => {
    const [person, dispatch] = useReducer(PersonReducer, initValue);
    const handleChangeMentor = () => {
        const prev = prompt('누구를 바꿀까요?');
        const cur = prompt('누구로 바꿀까요?');
        if (prev && cur) {
            dispatch({ type: 'UPDATE', prev, cur });
        }
    };
    const handleAddMentor = () => {
        const name = prompt('누구를 추가할까요?');
        const title = prompt('직함이 무엇인가요?');
        if (name && title) {
            dispatch({ type: 'ADD', name, title });
        }
    };
    const handleDeleteMentor = () => {
        const name = prompt('누구를 삭제하실건가요?');
        if (name) {
            dispatch({ type: 'DELETE', name });
        }
    };
    return (
        <div>
            <h1>
                {person.name}이는 {person.title}
            </h1>
            <p>엘리의 멘토는 :</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleChangeMentor}>멘토 교체</button>
            <button onClick={handleAddMentor}>멘토 추가</button>
            <button onClick={handleDeleteMentor}>멘토 삭제</button>
        </div>
    );
};
