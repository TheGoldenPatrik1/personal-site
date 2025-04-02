import React from 'react'
import '../Styles/Tile.css'
import { string, node } from 'prop-types'

const Tile = ({ title, className, children }) => {
    const classList = className ? `tile ${className}` : 'tile'
    return (
        <div className={classList}>
            {title && <h3 className="tile-title">{title}</h3>}
            <div className="tile-content">{children}</div>
        </div>
    )
}

Tile.propTypes = {
    title: string,
    className: string,
    children: node.isRequired
}

export default Tile
