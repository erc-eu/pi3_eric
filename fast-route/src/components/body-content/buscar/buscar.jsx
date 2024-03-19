import React from "react";
import icon_rotas from '../../../assets/busca_rotas.png'
import ButtonBuscar from '../../elements/button-element/button'
import localizacaoIcon from '../../../assets/localizacao.png'
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
                    <ButtonBuscar />
                </form>

                <div className="container-mapa">
                    <div className="container-title-mapa">
                        <img className="icon-localizacao" src={localizacaoIcon} alt="icon_buscar" />
                        <div className="container-h1">
                            <h1 className="h1-text-mapa">Melhor rota</h1>
                            <h1 className="h1-text-mapa">Distância: XX(km)</h1>
                        </div>
                    </div>
                    <div className="mapa">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buscar;