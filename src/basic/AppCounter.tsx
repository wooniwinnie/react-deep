import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

// AppCounter 컴포넌트
// 이곳에서 모든 count를 관리하고
// count를 prop으로 Counter 컴포넌트로 전달함

type Props = {};

export default function AppCounter({}: Props) {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        setCount((prev) => prev + 1);
    };
    return (
        <div className='box'>
            <div className='banner'>
                Total Count: {count}
                {count > 10 ? '아잇 뜨거워' : '아직 차갑다'}
            </div>
            <Counter total={count} onClick={handleClick} />
            <Counter total={count} onClick={handleClick} />
        </div>
    );
}
