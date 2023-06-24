import { spawn } from 'child_process';
import React, { useContext } from 'react';
import './Apptheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

type Props = {};
type AppThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};
const AppTheme = (props: Props) => {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
            <Footer />
        </DarkModeProvider>
    );
};

export default AppTheme;

const Header = () => {
    return <header className='header'>Header</header>;
};

const Main = () => {
    return (
        <main className='main'>
            Main
            <Profile />
            <Products />
        </main>
    );
};

const Profile = () => {
    return (
        <div>
            Profile
            <User />
        </div>
    );
};

const User = () => {
    return <div>User</div>;
};

const Products = () => {
    return (
        <div>
            Products
            <ProductDetail />
        </div>
    );
};

const ProductDetail = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('에러가 발생했음');
    }
    const { darkMode, toggleDarkMode } = context;

    return (
        <div>
            Product Detail
            <p>
                DarkMode:
                {darkMode ? (
                    <span style={{ backgroundColor: 'black', color: 'white' }}>
                        DarkMode
                    </span>
                ) : (
                    <span>Light Mode</span>
                )}
            </p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    );
};

const Footer = () => {
    return <header className='footer'>Footer</header>;
};
