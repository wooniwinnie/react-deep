import React, { useState } from 'react';

type Mentor = {
    name: string;
    title: string;
};

type Person = {
    name: string;
    title: string;
    mentors: Mentor[];
};

export default function AppMentors() {
    const [person, setPerson] = useState<Person>({
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
                    const current = prompt('어떤 멘토로 바꾸고 싶니?');
                    // 1. 사용자가 멘토 이름 바꾸기 클릭하고 입력한 값(prev)이 현재 멘토 객체의 이름과 동일한지 비교해야함 : if문?
                    setPerson((person: Person) => ({
                        ...person,
                        mentors: person.mentors.map((mentor: Mentor) => {
                            if (mentor.name === prev) {
                                // fallback value 추가
                                // 사용자가 입력을 취소하면 null을 반환하기 때문에 타입오류 발생하는 것을 방지하기 위함!
                                return { ...mentor, name: current || '' };
                            }
                            return mentor;
                        }),
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const name = prompt('추가하고 싶은 멘토는?');
                    const title = prompt('멘토의 타이틀은?');
                    setPerson((person: Person) => ({
                        ...person,
                        mentors: [
                            ...person.mentors,
                            { name: name || '', title: title || '' },
                        ],
                    }));
                }}
            >
                멘토 추가하기
            </button>
            <button
                onClick={() => {
                    const name = prompt('삭제하고 싶은 멘토는?');
                    setPerson((person: Person) => ({
                        ...person,
                        mentors: person.mentors.filter(
                            (m: Mentor) => m.name !== name
                        ),
                    }));
                }}
            >
                멘토 삭제하기
            </button>
        </div>
    );
}
