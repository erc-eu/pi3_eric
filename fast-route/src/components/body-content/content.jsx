import React from "react";
import Home from "./home/home";
import Buscar from "./buscar/buscar";
import Visualizar from "./visualizar/visualizar";
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
        case 2:
            return(
                <div className="container">
                    <Visualizar/>
                </div>
            )
            break;
        default:
            break;
    }

}

export default Content;