import React from 'react';
import Header from './components/Header.jsx';
import OverviewPage from './pages/Overview.jsx';
import Sidebar from './components/Sidebar.jsx';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="main-layout-wrapper"> {/* Contenedor para el sidebar y el contenido principal */}
                <Sidebar /> {/* El nuevo menú lateral */}
                <main className="main-content">
                    <OverviewPage />
                </main>
            </div>
            <footer className="app-footer">
                <span className="footer-text">Creado por Pablo Triana</span>
            </footer>
        </div>
    );
};

export default App;
