import React from 'react';

// Componente auxiliar para generar un SVG de gráfico simple
const ChartSVG = ({ type, color, text }) => {
    const width = 150;
    const height = 100;
    const bgColor = color || '#A78BFA'; // Default background color

    let chartContent;
    switch (type) {
        case 'bar':
            chartContent = (
                <>
                    <rect x="10" y="70" width="25" height="20" fill="white" />
                    <rect x="45" y="50" width="25" height="40" fill="white" />
                    <rect x="80" y="30" width="25" height="60" fill="white" />
                    <rect x="115" y="60" width="25" height="30" fill="white" />
                </>
            );
            break;
        case 'line':
            chartContent = (
                <>
                    <polyline points="10,80 40,30 70,60 100,20 130,70" fill="none" stroke="white" strokeWidth="3" />
                    <circle cx="10" cy="80" r="3" fill="white" />
                    <circle cx="40" cy="30" r="3" fill="white" />
                    <circle cx="70" cy="60" r="3" fill="white" />
                    <circle cx="100" cy="20" r="3" fill="white" />
                    <circle cx="130" cy="70" r="3" fill="white" />
                </>
            );
            break;
        case 'pie':
            chartContent = (
                <>
                    {/* Simplified arcs for a pie chart */}
                    <circle cx="75" cy="50" r="40" fill="white" stroke="none" />
                    <path d="M75,50 L75,10 A40,40 0 0,1 110.35,39.64 Z" fill="#eee" /> {/* Slice 1 */}
                    <path d="M75,50 L110.35,39.64 A40,40 0 0,1 100,85 Z" fill="#ddd" /> {/* Slice 2 */}
                    <path d="M75,50 L100,85 A40,40 0 0,1 40,85 Z" fill="#ccc" /> {/* Slice 3 */}
                    <path d="M75,50 L40,85 A40,40 0 0,1 75,10 Z" fill="#bbb" /> {/* Slice 4 */}
                </>
            );
            break;
        case 'scatter':
            chartContent = (
                <>
                    <circle cx="20" cy="80" r="4" fill="white" />
                    <circle cx="50" cy="30" r="4" fill="white" />
                    <circle cx="80" cy="60" r="4" fill="white" />
                    <circle cx="110" cy="20" r="4" fill="white" />
                    <circle cx="130" cy="70" r="4" fill="white" />
                </>
            );
            break;
        default:
            chartContent = (
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">
                    {text || 'No Preview'}
                </text>
            );
    }

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="chart-svg">
            <rect width="100%" height="100%" fill={bgColor} rx="6" ry="6" /> {/* Rounded background */}
            {chartContent}
        </svg>
    );
};


const PanelCard = ({ title, icon, data }) => {
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
                            {/* Renderizado de SVG en línea basado en el tipo de gráfico */}
                            {item.preview && (
                                <div className="card-item-preview-container">
                                    <ChartSVG
                                        type={item.name.includes('Barras') ? 'bar' :
                                              item.name.includes('Líneas') ? 'line' :
                                              item.name.includes('Pastel') ? 'pie' :
                                              item.name.includes('Dispersión') ? 'scatter' : 'default'}
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

export default PanelCard;
