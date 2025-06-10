// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-title">
                    <span role="img" aria-label="Dashboard Icon" className="header-icon">&#x1F5B4;</span> {/* Icono de panel */}
                    Panel de Control Central
                </h1>
                <nav>
                    <a href="/overview" className="header-link">
                        Inicio
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;