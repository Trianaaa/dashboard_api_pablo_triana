import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

// Componente auxiliar para generar un SVG de gráfico profesional
const ChartSVG = ({ type, color, text }) => {
    const width = 150;
    const height = 120;
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    // Colores que se adaptan al tema
    const chartColors = isDark 
        ? { primary: '#818cf8', secondary: '#6366f1', accent: '#8b5cf6', bg: '#1a1a1a', grid: '#2a2a2a', text: '#e5e7eb' }
        : { primary: '#6366f1', secondary: '#4f46e5', accent: '#8b5cf6', bg: '#fafafa', grid: '#e5e7eb', text: '#1f2937' };

    let chartContent;
    switch (type) {
        case 'bar':
            chartContent = (
                <>
                    {/* Grid lines */}
                    <line x1="15" y1="20" x2="15" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    <line x1="15" y1="100" x2="135" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    {/* Bars with gradient effect */}
                    <rect x="25" y="70" width="18" height="30" fill={chartColors.primary} rx="2" opacity="0.9" />
                    <rect x="48" y="50" width="18" height="50" fill={chartColors.secondary} rx="2" opacity="0.9" />
                    <rect x="71" y="35" width="18" height="65" fill={chartColors.accent} rx="2" opacity="0.9" />
                    <rect x="94" y="60" width="18" height="40" fill={chartColors.primary} rx="2" opacity="0.9" />
                    <rect x="117" y="55" width="18" height="45" fill={chartColors.secondary} rx="2" opacity="0.9" />
                </>
            );
            break;
        case 'line':
            chartContent = (
                <>
                    {/* Grid lines */}
                    <line x1="15" y1="20" x2="15" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    <line x1="15" y1="100" x2="135" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    {/* Line with area gradient */}
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={chartColors.primary} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={chartColors.primary} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M 20 80 L 45 40 L 70 60 L 95 25 L 120 70 L 135 50" 
                          fill="url(#lineGradient)" 
                          stroke="none" />
                    <polyline points="20,80 45,40 70,60 95,25 120,70 135,50" 
                              fill="none" 
                              stroke={chartColors.primary} 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" />
                    {/* Data points */}
                    {[20, 45, 70, 95, 120, 135].map((x, i) => {
                        const yValues = [80, 40, 60, 25, 70, 50];
                        return (
                            <circle key={i} cx={x} cy={yValues[i]} r="4" fill={chartColors.primary} stroke={chartColors.bg} strokeWidth="2" />
                        );
                    })}
                </>
            );
            break;
        case 'pie':
            chartContent = (
                <>
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
                        </filter>
                    </defs>
                    {/* Pie slices */}
                    <path d="M 75 50 L 75 20 A 30 30 0 0 1 105 40 Z" 
                          fill={chartColors.primary} 
                          opacity="0.9" 
                          filter="url(#shadow)" />
                    <path d="M 75 50 L 105 40 A 30 30 0 0 1 100 75 Z" 
                          fill={chartColors.secondary} 
                          opacity="0.9" 
                          filter="url(#shadow)" />
                    <path d="M 75 50 L 100 75 A 30 30 0 0 1 50 75 Z" 
                          fill={chartColors.accent} 
                          opacity="0.9" 
                          filter="url(#shadow)" />
                    <path d="M 75 50 L 50 75 A 30 30 0 0 1 75 20 Z" 
                          fill={chartColors.primary} 
                          opacity="0.7" 
                          filter="url(#shadow)" />
                    {/* Center circle for donut effect */}
                    <circle cx="75" cy="50" r="15" fill={chartColors.bg} />
                </>
            );
            break;
        case 'scatter':
            chartContent = (
                <>
                    {/* Grid */}
                    <line x1="15" y1="20" x2="15" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    <line x1="15" y1="100" x2="135" y2="100" stroke={chartColors.grid} strokeWidth="1" />
                    {/* Scatter points */}
                    {[
                        {x: 25, y: 75, size: 5},
                        {x: 45, y: 35, size: 6},
                        {x: 65, y: 60, size: 4},
                        {x: 85, y: 25, size: 7},
                        {x: 105, y: 55, size: 5},
                        {x: 125, y: 80, size: 6}
                    ].map((point, i) => (
                        <circle 
                            key={i} 
                            cx={point.x} 
                            cy={point.y} 
                            r={point.size} 
                            fill={i % 2 === 0 ? chartColors.primary : chartColors.secondary} 
                            opacity="0.8"
                            stroke={chartColors.bg}
                            strokeWidth="1.5"
                        />
                    ))}
                </>
            );
            break;
        default:
            chartContent = (
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={chartColors.text} fontSize="11" opacity="0.6">
                    {text || 'No Preview'}
                </text>
            );
    }

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="chart-svg">
            <rect width="100%" height="100%" fill={chartColors.bg} rx="8" ry="8" />
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
