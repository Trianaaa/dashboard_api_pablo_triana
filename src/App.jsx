import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import OverviewPage from './pages/Overview.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import './index.css';

// Placeholder pages for menu items
const HomePage = () => (
    <div className="page-container">
        <h1>Inicio</h1>
        <p>Bienvenido al Panel de Control Central</p>
    </div>
);

const DataSourcesPage = () => (
    <div className="page-container">
        <h1>Fuentes de Datos</h1>
        <p>Gestión de fuentes de datos disponibles</p>
    </div>
);

const PanelsPage = () => (
    <div className="page-container">
        <h1>Paneles</h1>
        <p>Visualización y gestión de paneles</p>
    </div>
);

const DashboardsPage = () => (
    <div className="page-container">
        <h1>Tableros</h1>
        <p>Gestión de tableros de control</p>
    </div>
);

const AdminPage = () => (
    <div className="page-container">
        <h1>Administración</h1>
        <p>Configuración y administración del sistema</p>
    </div>
);

const AssistantPage = () => (
    <div className="page-container">
        <h1>Asistente</h1>
        <p>Asistente virtual para ayuda</p>
    </div>
);

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <Router>
            <ThemeContextProvider>
                <div className="app-container">
                    <Header onMenuClick={toggleSidebar} />
                    <div className="main-layout-wrapper">
                        <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
                        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/overview" element={<OverviewPage />} />
                                <Route path="/data-sources" element={<DataSourcesPage />} />
                                <Route path="/panels" element={<PanelsPage />} />
                                <Route path="/dashboards" element={<DashboardsPage />} />
                                <Route path="/admin" element={<AdminPage />} />
                                <Route path="/assistant" element={<AssistantPage />} />
                            </Routes>
                        </main>
                    </div>
                    <footer className="app-footer">
                        <span className="footer-text">Creado por Pablo Triana</span>
                    </footer>
                </div>
            </ThemeContextProvider>
        </Router>
    );
};

export default App;

