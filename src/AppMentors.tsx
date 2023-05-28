import React, { useState } from 'react';

type Props = {};
type Person = [
    {
        name: string | null;
        title: string;
        mentors: [
            {
                name: string | null;
                title: string | null;
            },
            {
                name: string | null;
                title: string | null;
            }
        ];
    }
];

export default function AppMentors({}: Props) {
    const [person, setPerson] = useState<Person>([
        {
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
        },
    ]);
    return <div></div>;
}
