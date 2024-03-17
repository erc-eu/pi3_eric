import React, { useState } from "react";
import foto from '../../assets/foto_usuario.png'
import home_icon from '../../assets/home.png'
import rota_icon from '../../assets/rotas.png'
import onibus_icon from '../../assets/onibus.png'
import seta from '../../assets/seta.png'
import './content_vertical.css'
import Busca from "./button_busca/busca";
import Onibus from "./button_onibus/onibus";

function Content_vertical({ onSearch }) {
    const [buscaVisivel, setBuscaVisivel] = useState(false);
    const [onibusVisivel, setOnibusVisivel] = useState(false);


    const toggleBusca = () => {
        setBuscaVisivel(!buscaVisivel);
        onSearch(!buscaVisivel);
    };

    const toggleOnibus = () => {
        setOnibusVisivel(!onibusVisivel);

    };
    return (

        <div className="Container-content-vertical">
            <div className="user">
                <img className="img-user" src={foto} alt="user foto" />
                <h3>Nome</h3>
            </div>
            <div className="linha"></div>
            <div className="Container-menu">
                <div className="opt">
                    <div className="alinhar">
                        <img className="icon" src={home_icon} alt="home-icon" />
                        <li className="text">Home</li>
                    </div>
                </div>

                <div className="opt" onClick={toggleBusca} >
                    <div className="alinhar">
                        <img className="icon" src={rota_icon} alt="rota_icon" />
                        <li className="text">Rotas</li>
                    </div>
                    <img className={buscaVisivel ? "icon-seta open" : "icon-seta"} src={seta} />
                </div>
                <div className={buscaVisivel ? "busca open" : "busca"}>
                    {buscaVisivel && <Busca/>}
                </div>

                <div className="opt" onClick={toggleOnibus}>
                    <div className="alinhar">
                        <img className="icon" src={onibus_icon} alt="rota_icon" />
                        <li className="text">Ônibus</li>
                    </div>
                    <img className={onibusVisivel ? "icon-seta open" : "icon-seta"} src={seta} />
                </div>
                <div className={onibusVisivel ? "onibus open" : "onibus"}>
                    {onibusVisivel && <Onibus />}
                </div>


            </div>

            <div className="linha"></div>
            <div className="opt">
                <div className="alinhar">
                    <li className="text-perfil">Perfil</li>
                </div>
                <img className="icon-seta" src={seta} />
            </div>
        </div>
    )
}

export default Content_vertical;