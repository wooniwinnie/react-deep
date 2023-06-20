import { FormEvent } from 'react';
import './App.css';

import Profile from './components/Profile';

export default function AppProfile() {
    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
        console.log(e);
        alert('버튼이 클리됨');
    };
    return (
        <div>
            <button onClick={handleClick}>클릭</button>
            <div className='container'>
                <Profile
                    image='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='avatar'
                    name='Peter'
                    title='프론트엔드 개발자'
                    isNew={true}
                />
                <Profile
                    image='https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='이미지'
                    name='Amy'
                    title='프론트엔드 개발자'
                    isNew=''
                />
                <Profile
                    image='https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='이미지'
                    name='Sujan'
                    title='프론트엔드 개발자'
                    isNew=''
                />
            </div>
        </div>
    );
}
