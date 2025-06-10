import React from 'react';

// Componente auxiliar para generar un SVG de tablero simple
const DashboardSVG = ({ type, color, text }) => {
    const width = 150;
    const height = 100;
    const bgColor = color || '#34D399'; // Default background color

    let dashboardContent;
    switch (type) {
        case 'kpis':
            dashboardContent = (
                <>
                    <text x="20" y="30" fill="white" fontSize="18" fontWeight="bold">123</text>
                    <text x="20" y="50" fill="#eee" fontSize="10">Ventas Hoy</text>
                    <text x="20" y="75" fill="white" fontSize="18" fontWeight="bold">45%</text>
                    <text x="20" y="90" fill="#eee" fontSize="10">Crecimiento</text>
                </>
            );
            break;
        case 'analytic':
            dashboardContent = (
                <>
                    <rect x="10" y="15" width="40" height="20" fill="white" />
                    <rect x="60" y="40" width="40" height="20" fill="white" />
                    <rect x="110" y="65" width="30" height="20" fill="white" />
                    <rect x="10" y="50" width="70" height="10" fill="#eee" />
                    <rect x="10" y="70" width="50" height="10" fill="#eee" />
                </>
            );
            break;
        case 'executive':
            dashboardContent = (
                <>
                    <rect x="10" y="10" width="130" height="25" fill="#eee" rx="5" ry="5" />
                    <rect x="10" y="40" width="60" height="20" fill="white" rx="5" ry="5" />
                    <rect x="80" y="40" width="60" height="20" fill="white" rx="5" ry="5" />
                    <rect x="10" y="65" width="130" height="25" fill="#eee" rx="5" ry="5" />
                </>
            );
            break;
        case 'control':
            dashboardContent = (
                <>
                    <circle cx="30" cy="30" r="15" fill="white" />
                    <path d="M30,30 L45,30 L45,15 Z" fill="#eee" />
                    <text x="30" y="35" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">75%</text>
                    <rect x="60" y="20" width="70" height="10" fill="white" />
                    <rect x="60" y="40" width="50" height="10" fill="#eee" />
                    <rect x="60" y="60" width="80" height="10" fill="white" />
                    <rect x="60" y="80" width="40" height="10" fill="#eee" />
                </>
            );
            break;
        default:
            dashboardContent = (
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">
                    {text || 'No Preview'}
                </text>
            );
    }

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="dashboard-svg">
            <rect width="100%" height="100%" fill={bgColor} rx="6" ry="6" />
            {dashboardContent}
        </svg>
    );
};


const DashboardCard = ({ title, icon, data }) => {
    return (
        <section className="card-section">
            <h2 className="card-title">
                <span className="card-icon">{icon}</span> {title}
            </h2>
            <div className="card-items-container">
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className="card-item">
                            <h3 className="card-item-name">{item.name}</h3>
                            <p className="card-item-detail">Total: {item.count}</p>
                            <p className="card-item-date">Creado: {item.dateCreated}</p>
                            <p className="card-item-date">Última modificación: {item.dateModified}</p>
                            {/* Renderizado de SVG en línea para tableros */}
                            {item.preview && (
                                <div className="card-item-preview-container">
                                    <DashboardSVG
                                        type={item.name.includes('KPIs') ? 'kpis' :
                                              item.name.includes('Analítico') ? 'analytic' :
                                              item.name.includes('Ejecutivo') ? 'executive' :
                                              item.name.includes('Control') ? 'control' : 'default'}
                                        color={item.preview.match(/([0-9A-F]{6})/i) ? '#' + item.preview.match(/([0-9A-F]{6})/i)[1] : undefined}
                                        text={item.name}
                                    />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="card-empty-message">No hay {title.toLowerCase()} disponibles.</p>
                )}
            </div>
        </section>
    );
};

export default DashboardCard;
