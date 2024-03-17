import React, { useState } from "react";
import './menuH.css'
import logo from '../../assets/logo.jpeg'
import menu_icon from '../../assets/menu-icon.png'
import Content from "../body-content/content";
import Content_vertical from "../menu-vertical-content/content_vertical";
function MenuH() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [buscaAtivada, setBuscaAtivada] = useState(0);

    const handleBuscaCallback = (estadoBusca) => {
        if (estadoBusca == true){
            setBuscaAtivada(1);
        }else{
            setBuscaAtivada(0);
        }
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container-menu">
            <div className="menu-horizontal-on">
                <img onClick={toggleMenu} className="menu-icon" src={menu_icon} alt="menu-icon" />
                <div className="logo-contato">
                    <h3>Contato</h3>
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </div>
            <div className={menuOpen ? "menu-vertical open" : "menu-vertical"}>
                <img onClick={toggleMenu} className="menu-icon-v" src={menu_icon} alt="menu-icon" />
                <Content_vertical onSearch={handleBuscaCallback} />
            </div>
            <Content valor={buscaAtivada} />
        </div>
    )
}

export default MenuH;
