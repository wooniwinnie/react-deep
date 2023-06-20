import React from 'react';

type Props = {
    image: string;
    alt: string;
};

export default function Avatar({ image, alt }: Props) {
    return (
        <div>
            <img className='photo' src={image} alt={alt} />
        </div>
    );
}
