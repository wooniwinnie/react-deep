import React from 'react';
import Avatar from './Avatar';

type Props = {
    image: string;
    alt: string;
    name: string;
    title: string;
    isNew: boolean | string;
};

export default function Profile({ image, alt, name, title, isNew }: Props) {
    return (
        <div className='profile'>
            <Avatar image={image} alt={alt} />
            <h1>{name}</h1>
            <p>{title}</p>
            {isNew && <span>New</span>}
        </div>
    );
}
