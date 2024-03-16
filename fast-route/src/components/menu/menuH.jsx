import React, { useState } from "react";
import './menuH.css'
import logo from '../../assets/logo.jpeg'
import menu_icon from '../../assets/menu-icon.png'
import Content from "../body-content/content";
import Content_vertical from "../menu-vertical-content/content_vertical";
function MenuH() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <Content_vertical />
            </div>
            <Content/>
        </div>
    )
}

export default MenuH;
