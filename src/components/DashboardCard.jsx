import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

// Componente auxiliar para generar un SVG de tablero profesional
const DashboardSVG = ({ type, color, text }) => {
    const width = 150;
    const height = 120;
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    // Colores que se adaptan al tema
    const colors = isDark 
        ? { 
            bg: '#1a1a1a', 
            card: '#242424', 
            primary: '#818cf8', 
            secondary: '#6366f1', 
            accent: '#8b5cf6',
            text: '#e5e7eb',
            textSecondary: '#9ca3af',
            border: '#2a2a2a'
          }
        : { 
            bg: '#fafafa', 
            card: '#ffffff', 
            primary: '#6366f1', 
            secondary: '#4f46e5', 
            accent: '#8b5cf6',
            text: '#1f2937',
            textSecondary: '#6b7280',
            border: '#e5e7eb'
          };

    let dashboardContent;
    switch (type) {
        case 'kpis':
            dashboardContent = (
                <>
                    {/* KPI Cards */}
                    <rect x="10" y="15" width="60" height="40" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <text x="15" y="32" fill={colors.text} fontSize="20" fontWeight="600">1,234</text>
                    <text x="15" y="48" fill={colors.textSecondary} fontSize="9" fontWeight="500">Ventas</text>
                    
                    <rect x="80" y="15" width="60" height="40" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <text x="85" y="32" fill={colors.text} fontSize="20" fontWeight="600">45%</text>
                    <text x="85" y="48" fill={colors.textSecondary} fontSize="9" fontWeight="500">Crecimiento</text>
                    
                    <rect x="10" y="65" width="130" height="45" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <text x="15" y="82" fill={colors.text} fontSize="18" fontWeight="600">$12.5K</text>
                    <text x="15" y="98" fill={colors.textSecondary} fontSize="9" fontWeight="500">Ingresos Mensuales</text>
                </>
            );
            break;
        case 'analytic':
            dashboardContent = (
                <>
                    {/* Analytics Dashboard Layout */}
                    <rect x="10" y="10" width="130" height="25" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <line x1="20" y1="25" x2="130" y2="25" stroke={colors.border} strokeWidth="1" />
                    
                    <rect x="10" y="42" width="60" height="35" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    {/* Mini bar chart */}
                    <rect x="18" y="60" width="8" height="12" fill={colors.primary} rx="1" />
                    <rect x="30" y="55" width="8" height="17" fill={colors.secondary} rx="1" />
                    <rect x="42" y="62" width="8" height="10" fill={colors.accent} rx="1" />
                    <rect x="54" y="58" width="8" height="14" fill={colors.primary} rx="1" />
                    
                    <rect x="78" y="42" width="62" height="35" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    {/* Mini line chart */}
                    <polyline points="85,65 95,55 105,60 115,50 125,62 135,58" 
                              fill="none" 
                              stroke={colors.primary} 
                              strokeWidth="2" 
                              strokeLinecap="round" />
                    
                    <rect x="10" y="85" width="130" height="25" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    {/* Progress bars */}
                    <rect x="18" y="93" width="54" height="6" fill={colors.border} rx="3" />
                    <rect x="18" y="93" width="40" height="6" fill={colors.primary} rx="3" />
                    <rect x="78" y="93" width="54" height="6" fill={colors.border} rx="3" />
                    <rect x="78" y="93" width="35" height="6" fill={colors.secondary} rx="3" />
                </>
            );
            break;
        case 'executive':
            dashboardContent = (
                <>
                    {/* Executive Dashboard - Clean Layout */}
                    <rect x="10" y="10" width="130" height="32" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <circle cx="25" cy="26" r="8" fill={colors.primary} opacity="0.2" />
                    <circle cx="25" cy="26" r="4" fill={colors.primary} />
                    <text x="38" y="22" fill={colors.text} fontSize="12" fontWeight="600">Dashboard Ejecutivo</text>
                    <text x="38" y="32" fill={colors.textSecondary} fontSize="9">Resumen General</text>
                    
                    <rect x="10" y="50" width="62" height="28" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <text x="18" y="64" fill={colors.text} fontSize="16" fontWeight="600">$2.4M</text>
                    <text x="18" y="72" fill={colors.textSecondary} fontSize="9">Total Ventas</text>
                    
                    <rect x="78" y="50" width="62" height="28" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <text x="86" y="64" fill={colors.text} fontSize="16" fontWeight="600">1,250</text>
                    <text x="86" y="72" fill={colors.textSecondary} fontSize="9">Clientes</text>
                    
                    <rect x="10" y="86" width="130" height="24" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    <rect x="18" y="93" width="114" height="8" fill={colors.border} rx="4" />
                    <rect x="18" y="93" width="85" height="8" fill={colors.primary} rx="4" />
                    <text x="18" y="102" fill={colors.textSecondary} fontSize="8">Progreso: 75%</text>
                </>
            );
            break;
        case 'control':
            dashboardContent = (
                <>
                    {/* Control Dashboard */}
                    <rect x="10" y="10" width="130" height="100" fill={colors.card} rx="6" stroke={colors.border} strokeWidth="1" />
                    
                    {/* Circular progress */}
                    <circle cx="35" cy="35" r="12" fill="none" stroke={colors.border} strokeWidth="2" />
                    <circle cx="35" cy="35" r="12" fill="none" stroke={colors.primary} strokeWidth="2" 
                            strokeDasharray={`${2 * Math.PI * 12 * 0.75} ${2 * Math.PI * 12}`}
                            strokeDashoffset={2 * Math.PI * 12 * 0.25}
                            transform="rotate(-90 35 35)" />
                    <text x="35" y="39" textAnchor="middle" fill={colors.text} fontSize="10" fontWeight="600">75%</text>
                    
                    {/* Progress bars */}
                    <rect x="60" y="20" width="70" height="6" fill={colors.border} rx="3" />
                    <rect x="60" y="20" width="52" height="6" fill={colors.primary} rx="3" />
                    
                    <rect x="60" y="35" width="70" height="6" fill={colors.border} rx="3" />
                    <rect x="60" y="35" width="42" height="6" fill={colors.secondary} rx="3" />
                    
                    <rect x="60" y="50" width="70" height="6" fill={colors.border} rx="3" />
                    <rect x="60" y="50" width="56" height="6" fill={colors.accent} rx="3" />
                    
                    {/* Metrics */}
                    <text x="60" y="75" fill={colors.text} fontSize="11" fontWeight="600">Estado: Activo</text>
                    <text x="60" y="87" fill={colors.textSecondary} fontSize="9">Última actualización: Hoy</text>
                    <text x="60" y="98" fill={colors.textSecondary} fontSize="9">Sistema operativo</text>
                </>
            );
            break;
        default:
            dashboardContent = (
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill={colors.textSecondary} fontSize="11" opacity="0.6">
                    {text || 'No Preview'}
                </text>
            );
    }

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="dashboard-svg">
            <rect width="100%" height="100%" fill={colors.bg} rx="8" ry="8" />
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
