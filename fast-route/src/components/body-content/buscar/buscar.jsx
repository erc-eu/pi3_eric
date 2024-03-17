import React from "react";
import icon_buscar from '../../../assets/busca_rotas.png'
import './buscar.css'

function Buscar() {
    return (
        <div className="desig-buscar">
            <div className="container-buscar">
                <div className="container-title">
                    <img className="icon-buscar" src={icon_buscar} alt="icon_buscar" />
                    <h1 className="h1-text-buscar">Buscar Rotas</h1>
                </div>
            </div>
        </div>
    )
}
export default Buscar;