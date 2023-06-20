import React, { ChangeEvent, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

type Employee = {
    name: string;
    title: string;
    age: string;
    phone: string;
}[];

const AppCard = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const employee: Employee = [
        {
            name: '지운',
            title: '개발자',
            age: '34',
            phone: '010 - 1234 - 1234',
        },
        {
            name: '가은',
            title: 'CEO',
            age: '31',
            phone: '010 - 2345 - 2345',
        },
        {
            name: '토뚱',
            title: '웹디자이너',
            age: '20',
            phone: '010 - 4564 - 4564',
        },
    ];
    const handleName = (e: ChangeEvent<HTMLInputElement>) => {};
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {employee.map((em, index) => (
                    <Card key={index}>
                        <h1>이름: {em.name}</h1>
                        <p>직책: {em.title}</p>
                        <p>나이: {em.age}</p>
                        <p>연락처: {em.phone}</p>
                    </Card>
                ))}
            </div>
            <div>
                <form>
                    <h1>신규 직원을 등록하세요</h1>
                    <label htmlFor='name'>이름 : </label>
                    <input
                        type='text'
                        value={name}
                        placeholder='이름을 입력하세요'
                        onChange={handleName}
                    />
                    <label htmlFor='title'>직급 : </label>
                    <input
                        type='text'
                        value={title}
                        placeholder='직책을 입력하세요'
                    />
                    <label htmlFor='age'>나이 : </label>
                    <input
                        type='text'
                        value={age}
                        placeholder='나이를 입력하세요'
                    />
                    <label htmlFor='phone'>연락처 : </label>
                    <input
                        type='text'
                        value={phone}
                        placeholder='연락처를 입력하세요'
                    />
                    <button>전송</button>
                </form>
            </div>
        </div>
    );
};
export default AppCard;

const Card = ({ children }: Props) => {
    return (
        <div
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxWidth: '200px',
                margin: '1rem',
                padding: '1rem',
                textAlign: 'center',
            }}
        >
            {children}
        </div>
    );
};
