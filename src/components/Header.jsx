import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx'; // Importa el hook useTheme

const Header = () => {
    const { theme, toggleTheme } = useTheme(); // Consume el contexto del tema

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">
                    <span role="img" aria-label="Dashboard Icon" className="header-icon">&#x1F5B4;</span> {/* Icono de panel */}
                    Panel de Control Central
                </h1>
                <nav className="header-nav">
                    <a href="/overview" className="header-link">
                        Inicio
                    </a>
                    {/* Botón para alternar el tema */}
                    <button onClick={toggleTheme} className="theme-toggle-button">
                        {theme === 'light' ? (
                            <span role="img" aria-label="Dark Mode">&#x1F31B;</span> // Luna
                        ) : (
                            <span role="img" aria-label="Light Mode">&#x2600;&#xFE0F;</span> // Sol
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
