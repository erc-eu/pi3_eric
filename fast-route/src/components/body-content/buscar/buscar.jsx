import React from "react";
import icon_rotas from '../../../assets/busca_rotas.png'
import icon_search from '../../../assets/search-icon.png'
import './buscar.css'

function Buscar() {
    return (
        <div className="desig-buscar">
            <div className="container-buscar">
                <div className="container-title">
                    <img className="icon-buscar" src={icon_rotas} alt="icon_buscar" />
                    <h1 className="h1-text-buscar">Buscar Rotas</h1>
                </div>
                <form className="form">
                    <div className="container-form">
                        <label className="label-buscar">De onde você deseja partir?</label>
                        <div className="div-input-buscar">
                            <input className="input-buscar" />
                        </div>
                    </div>
                    <div className="container-form">
                        <label className="label-buscar">Para onde você deseja ir?</label>
                        <div className="div-input-buscar">
                            <input className="input-buscar" />
                        </div>
                    </div>
                    <div className="submit-buscar">
                        <div className="container-button-icon">
                            <img className="icon-search" src={icon_search} alt="icon_buscar" />
                            <li className="name-buscar">Buscar</li>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Buscar;