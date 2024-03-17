import React from "react";
import './home.css'
import desenho from '../../../assets/desenho.jpeg'
function Home() {
    return (
        <div className="desig">
            <div className="texto-body">
                <h1 className="h1-text">Otimize suas Rotas de Distribuição com Eficiência</h1>
                <p className="p-text">Desbloqueie o poder da otimização de rotas para a UFC.<br />
                    Economize tempo, dinheiro e esforço com nosso software intuitivo.</p>
            </div>
            <div className="div-desenho">
                <img className="desenho" src={desenho} alt="" />
            </div>
        </div>
    )
}

export default Home;