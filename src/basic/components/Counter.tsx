import React, { useState } from 'react';

type Props = {
    total: number;
    onClick: (count: number) => void;
};

export default function Counter({ total, onClick }: Props) {
    const [count, setCount] = useState<number>(0);
    const handleOnClick = () => {
        setCount((prev) => prev + 1);
        onClick(count);
    };
    return (
        <div className='counter'>
            <span className='number'>
                {count}/{total}
            </span>
            <button className='button' onClick={handleOnClick}>
                Add+
            </button>
        </div>
    );
}
