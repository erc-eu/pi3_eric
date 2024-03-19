import React from "react";
import icon_onibus from '../../../assets/onibus.png'
import ButtonBuscar from '../../elements/button-element/button' // Renomeado para ButtonBuscar
import agendaIcon from '../../../assets/agendaIcon.png'
import './visualizar.css'


function Visualizar() {
    return (
        <div className="desig-visualizar">
            <div className="container-visualizar">
                <div className="container-title">
                    <img className="icon-onibus" src={icon_onibus} alt="icon_buscar" />
                    <h1 className="h1-text-visualizar">Visualizar Ônibus</h1>
                </div>
                <div className="container-form-visualizar">
                    <label className="label-visualizar">Insira o Campus:</label>
                    <div className="div-input-visualizar">
                        <input className="input-visualizar" />
                    </div>
                </div>
                <ButtonBuscar /> {/* Componente renomeado para ButtonBuscar */}
                <div className="container-resp">
                    <div className="container-title">
                        <img className="icon-agenda" src={agendaIcon} alt="icon_buscar" />
                        <h1 className="h1-text-onibus">Ônibus do Campus xxxx</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Visualizar;
