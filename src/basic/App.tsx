import './App.css';

export default function App() {
    const name: string = '지운!';
    const list: string[] = ['우유', '딸기', '바나나', '포도'];
    return (
        <>
            <h1 className='orange'>{`Hello! ${name}`}</h1>
            <h2>Hello!</h2>
            <p>{name}</p>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <img
                style={{ width: '200px', height: '200px' }}
                src='https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60'
                alt=''
            />
        </>
    );
}
