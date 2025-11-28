import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    IconHome, 
    IconFolder, 
    IconDatabase, 
    IconChartLine, 
    IconDashboard, 
    IconSettings, 
    IconMessageCircle 
} from '@tabler/icons-react';

const Sidebar = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    return (
        <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconHome className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Inicio</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/overview" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconFolder className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Proyectos</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/data-sources" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconDatabase className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Fuentes de datos</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/panels" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconChartLine className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Paneles</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/dashboards" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconDashboard className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Tableros</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/admin" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconSettings className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Administración</span>
                        </NavLink>
                    </li>
                    <li className="sidebar-menu-item">
                        <NavLink 
                            to="/assistant" 
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                            onClick={handleLinkClick}
                        >
                            <IconMessageCircle className="sidebar-icon" size={20} stroke={1.5} />
                            <span>Asistente</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
