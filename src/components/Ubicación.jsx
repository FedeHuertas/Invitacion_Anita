import React from "react";
import Boton from "./Boton";
import s from './Ubicación.module.css'

const Ubicación = (props) => {
    return(
        <div className={s.container} >
            <h1 className={s.titulo}>Lugar</h1>
            <div className={s.contenido}>
                <h3 className={s.nombre}>{props.nombre}</h3>
                <h4>Dirección:</h4>
                <span className={s.direccion} >{props.direccion}</span><br/>
                <h6>{props.localidad}</h6>
                <div className={s.comollegar} >
                    <img className={s.icon} src='https://cdn-icons-png.flaticon.com/512/1239/1239344.png' ></img>
                    <h4 className={s.textoComoLlegar} >Como llegar:</h4>
                    <a href='https://www.google.com/maps/place/Quinta+Las+Carretas/@-31.5580827,-68.4894223,17z/data=!3m1!4b1!4m5!3m4!1s0x96816ad18c5c687f:0xa97bdd1f60a2b466!8m2!3d-31.5580827!4d-68.4872336' >
                        <Boton texto='Indicaciones' />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Ubicación;