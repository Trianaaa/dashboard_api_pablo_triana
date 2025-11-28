import React from 'react';
import { Link } from 'react-router-dom';
import { IconBolt, IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../context/ThemeContext.jsx';

const Header = ({ onMenuClick }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <button className="mobile-menu-button" onClick={onMenuClick} aria-label="Toggle menu">
                        <span>☰</span>
                    </button>
                    <Link to="/" className="header-title-link">
                        <h1 className="header-title">
                            <IconBolt className="header-icon" size={20} stroke={1.5} />
                            <span>Panel de Control</span>
                        </h1>
                    </Link>
                </div>
                <nav className="header-nav">
                    <button 
                        onClick={toggleTheme} 
                        className={`theme-switch ${isDark ? 'theme-switch-dark' : ''}`}
                        aria-label="Toggle theme"
                        type="button"
                    >
                        <span className="theme-switch-track">
                            <span className="theme-switch-thumb">
                                {isDark ? (
                                    <IconMoon size={14} stroke={2} />
                                ) : (
                                    <IconSun size={14} stroke={2} />
                                )}
                            </span>
                        </span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
