import React from "react";
import foto from '../../assets/foto_usuario.png'
import './content_vertical.css'
function Content_vertical (){
    return(
        <div className="Container-content-vertical">
            <div className="user">
                <img className="img-user" src={foto} alt="user foto" />
                <h3>username</h3>
            </div>
            <div className="linha"></div>
        </div>
    )
}

export default Content_vertical;