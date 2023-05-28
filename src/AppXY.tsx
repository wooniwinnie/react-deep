import React, { useState } from 'react';
import './AppXY.css';
type Props = {};

export default function AppXY({}: Props) {
    interface PointerEvent<T = Element> {
        clientX: number;
        clientY: number;
    }
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handlePointer = (e: PointerEvent<HTMLDivElement>) => {
        console.log(e.clientX, e.clientY);
        setPosition({ x: e.clientX, y: e.clientY });
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        // setPosition((prev) => ({ ...prev, x: e.clientX }));
    };
    return (
        <div className='container' onPointerMove={handlePointer}>
            <div
                className='pointer'
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
        </div>
    );
}
