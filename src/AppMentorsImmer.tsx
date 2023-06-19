import React, { useState } from 'react';
import { useImmer } from 'use-immer';
type Person = {
    name: string;
    title: string;
    mentors: {
        name: string;
        title: string;
    }[];
};

const initialValue = {
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

export const AppMentorsImmer = () => {
    const [person, updatePerson] = useImmer<Person>(initialValue);
    const handleChangeMentor = () => {
        const prev = prompt('누구를 바꿀까요?');
        const cur = prompt('누구로 바꿀까요?');
        updatePerson((person) => {
            const mentor = person.mentors.find((m) => m.name === prev);
            if (prev && cur && mentor?.name) {
                return mentor.name === cur;
            }
        });
    };
    const handleAddMentor = () => {
        const name = prompt('누구를 추가할까요?');
        const title = prompt('직함이 무엇인가요?');
        updatePerson((person) => {
            if (name && title) {
                person.mentors.push({ name, title });
            }
        });
    };
    const handleDeleteMentor = () => {
        const name = prompt('누구를 삭제하실건가요?');
        updatePerson((person) => {
            const index = person.mentors.findIndex((m) => m.name === name);
            person.mentors.splice(index, 1);
        });
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
