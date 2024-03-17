import React from "react";
import Home from "./home/home";
import Buscar from "./buscar/buscar";
import './content.css'

function Content(props) {

    switch (props.valor) {
        case 0:
            return (
                <div className="container">
                    <Home />
                </div>
            )
            break;
        case 1:
            return (
                <div className="container">
                    <Buscar/>
                </div>
            )
            break;
        default:
            break;
    }

}

export default Content;