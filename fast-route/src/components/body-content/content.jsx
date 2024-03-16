import React, { useState } from "react";
import desenho from '../../assets/desenho.jpeg'
import './content.css'

function Content(props) {

    const [estado, setEstado] = useState(props.valor);

    return (
        <div className="container">
            <div className="desig">
                <div className="texto-body">

                    <h1 className="h1-text">Otimize suas Rotas de Distribuição com Eficiência</h1>
                    <p className="p-text">Desbloqueie o poder da otimização de rotas para a UFC.
                        Economize tempo, dinheiro e esforço com nosso software intuitivo.</p>

                    <div className="div-desenho">
                        <img className="desenho" src={desenho} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;