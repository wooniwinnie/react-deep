import React, { useState } from 'react';

type Person = {
    name: string;
    title: string;
    mentors: {
        name: string;
        title: string;
    }[];
};

export const AppMentors = () => {
    const [person, setPerson] = useState<Person>({
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
    });
    const handleChangeMentor = () => {
        const prev = prompt('누구를 바꿀까요?');
        const cur = prompt('누구로 바꿀까요?');
        setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
                if (prev && cur && mentor.name === prev) {
                    return { ...mentor, name: cur };
                }
                return mentor;
            }),
        }));
    };
    const handleAddMentor = () => {
        const name = prompt('누구를 추가할까요?');
        const title = prompt('직함이 무엇인가요?');
        if (name && title) {
            setPerson((person) => ({
                ...person,
                mentors: [...person.mentors, { name, title }],
            }));
        } else {
            alert('멘토의 이름과 직함을 제대로 입력해주세요!');
        }
    };
    const handleDeleteMentor = () => {
        const name = prompt('누구를 삭제하실건가요?');
        setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
        }));
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
