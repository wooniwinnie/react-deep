import React from 'react';

type Props = {
    children: React.ReactNode;
};

type Profile = {
    image: string;
    name: string;
    size: number;
};

export const AppWrap = () => {
    return (
        <div>
            <Navbar>
                <Avatar
                    image='https://images.unsplash.com/photo-1687208878004-5b9d7dc9e922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
                    name='jiwoon'
                    size={200}
                />
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    );
};

const Navbar = ({ children }: Props) => {
    return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
};

const Avatar = ({ image, name, size }: Profile) => {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
        </div>
    );
};
