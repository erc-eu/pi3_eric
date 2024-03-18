import React from "react";
import icon_search from '../../../assets/search-icon.png'
import './button.css'

function Button() {
    return (
        <div className="submit-buscar">
            <div className="container-button-icon">
                <img className="icon-search" src={icon_search} alt="icon_buscar" />
                <li className="name-buscar">Buscar</li>
            </div>
        </div>
    )
}

export default Button;