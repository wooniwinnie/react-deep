import React, { ChangeEvent, FormEvent, useState } from 'react';

type Props = {};

export const AppForms = (props: Props) => {
    const [form, setForm] = useState({ name: '', email: '' });

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(form);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름</label>
            <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor='email'>이메일:</label>
            <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
};
