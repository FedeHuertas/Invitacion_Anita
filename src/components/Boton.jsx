import React from "react";
import s from './Boton.module.css';
 
const Boton = (props) => {

    return(
        <button className={s.buttons} >{props.texto}</button>
    )
};

export default Boton;