import React from 'react';
import Header from './components/Header.jsx';
import OverviewPage from './pages/Overview.jsx';
import Sidebar from './components/Sidebar.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx'; // Importa el proveedor del contexto
import './index.css';

const App = () => {
    return (
        <ThemeContextProvider> {/* Envuelve toda la aplicación con el proveedor del tema */}
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
        </ThemeContextProvider>
    );
};

export default App;

