import React, { useReducer } from 'react';
import personReducer from './reducer/personReducer';

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
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    // const [person, setPerson] = useState<Person>();
    const handleChange = () => {
        const prev = prompt('누구를 바꾸고 싶니?');
        const current = prompt('어떤 멘토로 바꾸고 싶니?');

        dispatch({ type: 'CHANGE', prev, current });
    };

    const handleAdd = () => {
        const name = prompt('추가하고 싶은 멘토는?');
        const title = prompt('멘토의 타이틀은?');
        dispatch({ type: 'ADD', name, title });
    };
    const handleDelete = () => {
        const name = prompt('삭제하고 싶은 멘토는?');
        dispatch({ type: 'DELETE', name });
    };

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
            <button onClick={handleChange}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
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
};
