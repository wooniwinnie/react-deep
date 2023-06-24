import React, { useState, createContext } from 'react';

type Props = {
    children: React.ReactNode;
};

type AppThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<AppThemeContextType | undefined>(
    undefined
);

export const DarkModeProvider = ({ children }: Props) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
