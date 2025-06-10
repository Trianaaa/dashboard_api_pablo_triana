import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx'; // Se añadió .jsx
import DataSourceCard from '../components/DataSourceCard.jsx'; // Se añadió .jsx
import PanelCard from '../components/PanelCard.jsx'; // Se añadió .jsx
import DashboardCard from '../components/DashboardCard.jsx'; // Se añadió .jsx
import '../styles/Overview.css'; // Se añadió .css

const OverviewPage = () => {
    // Sample data for demonstration purposes
    const [projects, setProjects] = useState([
        { id: 1, name: 'AGUA POTABLE Y SANEAMIENTO BÁSICO', count: 5, dateCreated: '2023-09-22', dateModified: '2023-09-25' },
        { id: 2, name: 'ENERGÍA RENOVABLE RURAL', count: 8, dateCreated: '2023-08-10', dateModified: '2023-09-01' },
        { id: 3, name: 'INFRAESTRUCTURA VIAL NACIONAL', count: 3, dateCreated: '2023-10-01', dateModified: '2023-10-05' },
    ]);

    const [dataSources, setDataSources] = useState([
        { id: 1, name: 'MINVIVIENDA_AGUA_SANEAMIENTO', count: 12, dateCreated: '2023-07-15', dateModified: '2023-09-20' },
        { id: 2, name: 'IDEAM_CLIMA_INFO', count: 7, dateCreated: '2023-06-01', dateModified: '2023-08-18' },
        { id: 3, name: 'DANE_POBLACION_CENSOS', count: 9, dateCreated: '2023-09-01', dateModified: '2023-10-10' },
    ]);

    const [panels, setPanels] = useState([
        { id: 1, name: 'ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO', count: 42, dateCreated: '2023-09-25', dateModified: '2023-09-25', preview: 'https://placehold.co/150x100/A78BFA/ffffff?text=Gráfico' },
        { id: 2, name: 'ANÁLISIS DE CONSUMO ENERGÉTICO', count: 30, dateCreated: '2023-08-20', dateModified: '2023-09-05', preview: 'https://placehold.co/150x100/60A5FA/ffffff?text=Reporte' },
        { id: 3, name: 'MAPA DE DENSIDAD POBLACIONAL', count: 25, dateCreated: '2023-10-02', dateModified: '2023-10-08', preview: 'https://placehold.co/150x100/F87171/ffffff?text=Mapa' },
    ]);

    const [dashboards, setDashboards] = useState([
        { id: 1, name: 'INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1', count: 3, dateCreated: '2023-09-26', dateModified: '2023-09-26', preview: 'https://placehold.co/150x100/34D399/ffffff?text=Tablero' },
        { id: 2, name: 'RESUMEN EJECUTIVO DE ENERGÍAS RENOVABLES', count: 5, dateCreated: '2023-08-25', dateModified: '2023-09-10', preview: 'https://placehold.co/150x100/FBBF24/ffffff?text=KPIs' },
        { id: 3, name: 'CUADRO DE MANDO INTEGRAL', count: 2, dateCreated: '2023-10-05', dateModified: '2023-10-12', preview: 'https://placehold.co/150x100/FB923C/ffffff?text=Análisis' },
    ]);

    // State for sorting options
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const [sortBy, setSortBy] = useState('name'); // 'name' or 'count'

    // Function to sort data
    const sortData = (data) => {
        return [...data].sort((a, b) => {
            let comparison = 0;
            if (sortBy === 'name') {
                comparison = a.name.localeCompare(b.name);
            } else if (sortBy === 'count') {
                comparison = a.count - b.count;
            }
            return sortOrder === 'asc' ? comparison : -comparison;
        });
    };

    // Sorted versions of the data
    const sortedProjects = sortData(projects);
    const sortedDataSources = sortData(dataSources);
    const sortedPanels = sortData(panels);
    const sortedDashboards = sortData(dashboards);

    return (
        <div className="overview-container">
            {/* Sorting controls */}
            <div className="sort-controls-panel">
                <h2 className="sort-controls-title">Controles de Ordenamiento</h2>
                <div className="sort-controls-group">
                    <label htmlFor="sortBy" className="sort-label">Ordenar por:</label>
                    <select
                        id="sortBy"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select"
                    >
                        <option value="name">Nombre</option>
                        <option value="count">Conteo</option>
                    </select>

                    <label htmlFor="sortOrder" className="sort-label">Orden:</label>
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="sort-select"
                    >
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>
            </div>

            {/* Grid layout for the main entities */}
            <div className="cards-grid">
                {/* Projects Section */}
                <ProjectCard
                    title="Proyectos"
                    icon="📂"
                    data={sortedProjects}
                />

                {/* Data Sources Section */}
                <DataSourceCard
                    title="Fuentes de Datos"
                    icon="🗄️"
                    data={sortedDataSources}
                />

                {/* Panels Section */}
                <PanelCard
                    title="Paneles"
                    icon="📈"
                    data={sortedPanels}
                />

                {/* Dashboards Section */}
                <DashboardCard
                    title="Tableros"
                    icon="📊"
                    data={sortedDashboards}
                />
            </div>
        </div>
    );
};

export default OverviewPage;

