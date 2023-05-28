import React, { useState } from 'react';

// Person은 name, title, mentor 프로퍼티는 각각 string 타입으로 지정
// mentor 프로퍼티는 또 다른 객체를 값으로 가짐
// mentor 객체는 name과 title이라는 프로퍼티를 가짐

type Person = {
    name: string | null;
    title: string | null;
    mentor: {
        name: string | null;
        title: string | null;
    };
};

export default function AppMentor() {
    const [person, setPerson] = useState<Person>({
        name: '지운',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    });
    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name}(
                {person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt('멘토의 이름이 무엇이니?');
                    setPerson((person) => ({
                        ...person,
                        mentor: {
                            ...person.mentor,
                            name,
                        },
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt('멘토의 타이틀은 무엇이니?');
                    setPerson((person) => ({
                        ...person,
                        mentor: {
                            ...person.mentor,
                            title,
                        },
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
