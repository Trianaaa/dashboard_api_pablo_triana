import React, { createContext, useState, useContext, useEffect } from 'react';

// Contexto
export const ThemeContext = createContext();

// Hook personalizado para consumir el contexto fácilmente
export const useTheme = () => {
    return useContext(ThemeContext);
};

// Proveedor del Contexto
export const ThemeContextProvider = ({ children }) => {
    // Estado para el tema, inicializado desde localStorage o predeterminado a 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    // Efecto para aplicar la clase 'dark-mode' al body y guardar en localStorage
    useEffect(() => {
        const root = document.documentElement; // Accede al elemento <html>
        if (theme === 'dark') {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Función para alternar el tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

