import React from 'react';

const PanelCard = ({ title, icon, data }) => {
    return (
        <section className="card-section">
            <h2 className="card-title">
                <span className="card-icon">{icon}</span> {title}
            </h2>
            <div className="card-items-container">
                {/* Conditional rendering based on data existence */}
                {data.length > 0 ? (
                    // Map over data if available
                    data.map((item) => (
                        <div key={item.id} className="card-item">
                            <h3 className="card-item-name">{item.name}</h3>
                            <p className="card-item-detail">Total: {item.count}</p>
                            <p className="card-item-date">Creado: {item.dateCreated}</p>
                            <p className="card-item-date">Última modificación: {item.dateModified}</p>
                            {/* Conditional rendering for preview image */}
                            {item.preview && (
                                <div className="card-item-preview-container">
                                    <img
                                        src={item.preview}
                                        alt={`Previsualización de ${item.name}`}
                                        className="card-item-preview-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x100/CCCCCC/ffffff?text=No+Preview'; }}
                                    />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    // Message when no data is available
                    <p className="card-empty-message">No hay {title.toLowerCase()} disponibles.</p>
                )}
            </div>
        </section>
    );
};

export default PanelCard;
