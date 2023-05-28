import React, { useState } from 'react';

type Props = {};
// type Person = {
//     name: string;
//     title: string;
//     mentors: [
//         {
//             name: string | null;
//             title: string | null;
//         },
//         {
//             name: string | null;
//             title: string | null;
//         }
//     ][];
// };

export default function AppMentors({}: Props) {
    const [person, setPerson] = useState({
        name: '지운',
        title: '개발자',
        mentors: [
            {
                name: '밥',
                title: '시니어개발자',
            },
            {
                name: '제임스',
                title: '시니어개발자',
            },
        ],
    });
    return (
        <div>
            <h1>
                {person.name}이는 {person.title}
            </h1>
            <p>{person.name}의 멘토는 : </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button
                onClick={() => {
                    const prev = prompt('누구를 바꾸고 싶니?');
                    const name = prompt('어떤 멘토로 바꾸고 싶니?');
                    // 1. 사용자가 멘토 이름 바꾸기 클릭하고 입력한 값(prev)이 현재 멘토 객체의 이름과 동일한지 비교해야함 : if문?
                }}
            >
                멘토 이름 바꾸기
            </button>
        </div>
    );
}
