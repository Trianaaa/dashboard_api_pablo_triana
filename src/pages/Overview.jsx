import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';
import DataSourceCard from '../components/DataSourceCard.jsx';
import PanelCard from '../components/PanelCard.jsx';
import DashboardCard from '../components/DashboardCard.jsx';
import '../styles/Overview.css';

const OverviewPage = () => {
    // Sample data for demonstration purposes
    const [projects, setProjects] = useState([
        { id: 1, name: 'AGUA POTABLE Y SANEAMIENTO BÁSICO', description: 'Proyecto enfocado en el mejoramiento de infraestructuras de agua potable y saneamiento básico en zonas rurales.', count: 5, dateCreated: '2023-09-22', dateModified: '2023-09-25', author: 'admin_creangel', group: 'AguaMinvivienda' },
        { id: 2, name: 'ENERGÍA RENOVABLE RURAL', description: 'Iniciativa para implementar soluciones de energía limpia en comunidades remotas.', count: 8, dateCreated: '2023-08-10', dateModified: '2023-09-01', author: 'admin_energia', group: 'EnergiaSostenible' },
        { id: 3, name: 'INFRAESTRUCTURA VIAL NACIONAL', description: 'Plan de desarrollo para la mejora y construcción de vías principales en el territorio nacional.', count: 3, dateCreated: '2023-10-01', dateModified: '2023-10-05', author: 'admin_vias', group: 'ViasNacionales' },
    ]);

    // Data related to projects (added projectId for linking)
    const [dataSources, setDataSources] = useState([
        { id: 1, projectId: 1, name: 'MINVIVIENDA_AGUA_SANEAMIENTO', count: 12, dateCreated: '2023-07-15', dateModified: '2023-09-20' },
        { id: 2, projectId: 1, name: 'IDEAM_CLIMA_INFO', count: 7, dateCreated: '2023-06-01', dateModified: '2023-08-18' },
        { id: 3, projectId: 2, name: 'GEODATOS_ENERGIA', count: 5, dateCreated: '2023-09-01', dateModified: '2023-10-10' },
        { id: 4, projectId: 3, name: 'INV_TRANSPORTES_DATOS', count: 8, dateCreated: '2023-08-05', dateModified: '2023-09-22' },
    ]);

    const [panels, setPanels] = useState([
        { id: 1, projectId: 1, name: 'ESTADO AL CORTE DE LOS PROYECTOS EN SEGUIMIENTO (Gráfico de Barras)', count: 42, dateCreated: '2023-09-25', dateModified: '2023-09-25', preview: 'https://placehold.co/150x100/A78BFA/ffffff?text=Gráfico+de+Barras' },
        { id: 2, projectId: 1, name: 'ANÁLISIS DE CONSUMO HÍDRICO (Gráfico de Líneas)', count: 30, dateCreated: '2023-08-20', dateModified: '2023-09-05', preview: 'https://placehold.co/150x100/60A5FA/ffffff?text=Gráfico+de+Líneas' },
        { id: 3, projectId: 2, name: 'GENERACIÓN ENERGÉTICA SOLAR (Gráfico de Pastel)', count: 25, dateCreated: '2023-10-02', dateModified: '2023-10-08', preview: 'https://placehold.co/150x100/F87171/ffffff?text=Gráfico+de+Pastel' },
        { id: 4, projectId: 3, name: 'AVANCE DE OBRAS VIALES (Gráfico de Dispersión)', count: 18, dateCreated: '2023-09-10', dateModified: '2023-10-15', preview: 'https://placehold.co/150x100/34D399/ffffff?text=Gráfico+de+Dispersión' },
    ]);

    const [dashboards, setDashboards] = useState([
        { id: 1, projectId: 1, name: 'INDICADORES EN MATERIA DE AGUA POTABLE Y SANEAMIENTO BÁSICO V1 (Tablero KPIs)', count: 3, dateCreated: '2023-09-26', dateModified: '2023-09-26', preview: 'https://placehold.co/150x100/34D399/ffffff?text=Tablero+KPIs' },
        { id: 2, projectId: 1, name: 'RESUMEN EJECUTIVO DE SANEAMIENTO (Tablero Analítico)', count: 5, dateCreated: '2023-08-25', dateModified: '2023-09-10', preview: 'https://placehold.co/150x100/FBBF24/ffffff?text=Tablero+Analítico' },
        { id: 3, projectId: 2, name: 'CUADRO DE MANDO ENERGÉTICO (Tablero Ejecutivo)', count: 2, dateCreated: '2023-10-05', dateModified: '2023-10-12', preview: 'https://placehold.co/150x100/FB923C/ffffff?text=Tablero+Ejecutivo' },
        { id: 4, projectId: 3, name: 'SEGUIMIENTO PROYECTOS VIALES (Tablero de Control)', count: 4, dateCreated: '2023-09-15', dateModified: '2023-10-20', preview: 'https://placehold.co/150x100/A78BFA/ffffff?text=Métricas' },
    ]);

    // State for sorting options
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
    const [sortBy, setSortBy] = useState('name'); // 'name' or 'count'

    // State for selected project
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    // Function to handle project selection
    const handleProjectSelect = (projectId) => {
        setSelectedProjectId(projectId);
        // Scroll to summary section smoothly
        setTimeout(() => {
            const summarySection = document.querySelector('.project-summary-section');
            if (summarySection) {
                summarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    // Filtered data based on selected project
    const selectedProject = projects.find(p => p.id === selectedProjectId);
    const filteredDataSources = selectedProjectId ? dataSources.filter(ds => ds.projectId === selectedProjectId) : [];
    const filteredPanels = selectedProjectId ? panels.filter(p => p.projectId === selectedProjectId) : [];
    const filteredDashboards = selectedProjectId ? dashboards.filter(d => d.projectId === selectedProjectId) : [];

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

    // Sorted versions of the data (applied to main lists and filtered lists)
    const sortedProjects = sortData(projects);
    const sortedFilteredDataSources = sortData(filteredDataSources);
    const sortedFilteredPanels = sortData(filteredPanels);
    const sortedFilteredDashboards = sortData(filteredDashboards);


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

            {/* Projects Section - Always visible */}
            <div className="project-list-section">
                <ProjectCard
                    title="Proyectos Disponibles"
                    icon="📁"
                    data={sortedProjects}
                    onSelectProject={handleProjectSelect}
                    selectedProjectId={selectedProjectId}
                />
            </div>

            {/* Project Summary Section - Visible only when a project is selected */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <motion.div
                        className="project-summary-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="summary-header">
                                <h2 className="summary-title">{selectedProject.name}</h2>
                                <button 
                                    className="summary-close-btn" 
                                    onClick={() => setSelectedProjectId(null)}
                                    aria-label="Cerrar resumen"
                                >
                                    ×
                                </button>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            className="summary-details-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                        >
                            <div className="summary-details-grid">
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Descripción</span>
                                    <span className="summary-detail-value">{selectedProject.description || 'No registrada'}</span>
                                </div>
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Fecha de creación</span>
                                    <span className="summary-detail-value">{selectedProject.dateCreated}</span>
                                </div>
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Última modificación</span>
                                    <span className="summary-detail-value">{selectedProject.dateModified}</span>
                                </div>
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Autor</span>
                                    <span className="summary-detail-value">{selectedProject.author}</span>
                                </div>
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Grupo</span>
                                    <span className="summary-detail-value">{selectedProject.group}</span>
                                </div>
                                <div className="summary-detail-item">
                                    <span className="summary-detail-label">Total items</span>
                                    <span className="summary-detail-value">{selectedProject.count}</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="cards-grid project-summary-grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                <DataSourceCard
                                    title="Fuentes de datos"
                                    icon="📊"
                                    data={sortedFilteredDataSources}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <PanelCard
                                    title="Paneles creados"
                                    icon="📈"
                                    data={sortedFilteredPanels}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                            >
                                <DashboardCard
                                    title="Tableros creados"
                                    icon="📉"
                                    data={sortedFilteredDashboards}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OverviewPage;
