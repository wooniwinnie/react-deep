import React from 'react';

type Props = {};

const AppTheme = (props: Props) => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default AppTheme;

const Header = () => {
    return <header className='header'>Header</header>;
};

const Main = () => {
    return (
        <main>
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
    return (
        <div>
            Product Detail
            <p>DarkMode:</p>
            <button>Toggle</button>
        </div>
    );
};

const Footer = () => {
    return <header className='footer'>Footer</header>;
};
