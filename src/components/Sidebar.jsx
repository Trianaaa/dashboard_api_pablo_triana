import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link active">
                            <span className="sidebar-icon">&#x2302;</span> {/* House */}
                            Inicio
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/overview" className="sidebar-link">
                            <span className="sidebar-icon">&#x1F4C1;</span> {/* Folder */}
                            Proyectos
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link">
                            <span className="sidebar-icon">&#x1F5C4;</span> {/* File Cabinet */}
                            Fuentes de datos
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link">
                            <span className="sidebar-icon">&#x1F4C8;</span> {/* Chart Increasing */}
                            Paneles
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link">
                            <span className="sidebar-icon">&#x1F4CA;</span> {/* Bar Chart */}
                            Tableros
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link">
                            <span className="sidebar-icon">&#x2699;</span> {/* Gear */}
                            Administración
                        </a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="#" className="sidebar-link">
                            <span className="sidebar-icon">&#x1F4AC;</span> {/* Speech Balloon */}
                            Asistente
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
