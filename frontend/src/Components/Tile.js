import React from 'react';
import '../Styles/Tile.css';

const Tile = ({ title, className, children }) => {
    const classList = className ? `tile ${className}` : 'tile';
    return (
        <div className={classList}>
            {title && <h3 className="tile-title">{title}</h3>}
            <div className="tile-content">{children}</div>
        </div>
    );
};

export default Tile;