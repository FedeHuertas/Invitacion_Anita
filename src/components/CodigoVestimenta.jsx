import React from "react";
import s from './CodigoVestimenta.module.css';
 
const CodigoVestimenta = (props) => {

    return(
        <div className={s.container}>
            <img className={s.icons} src="https://res.cloudinary.com/dhjbyazal/image/upload/v1667793080/Anita/icons8-traje-50_1_plhuk5.png" />
            <img className={s.icons} src="https://res.cloudinary.com/dhjbyazal/image/upload/v1667793079/Anita/icons8-dress-67_1_rrrdfd.png" />
            <span className={s.texto} >{props.vestimenta}</span>
        </div>
    )
};

export default CodigoVestimenta;