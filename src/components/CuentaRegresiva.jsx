import React from "react";
import Countdown from "react-countdown-simple";
import Boton from "./Boton";
import s from './CuentaRegresiva.module.css'

const CuentaRegresiva = () => {
    const fecha = new Date('Dec 10 2022').toISOString();
    return(
        <div className={s.container} >
            <h1 className={s.titulo} >Fecha</h1>
            <div className={s.contenido}>
                <h3>{'10 de Diciembre a las 21:30hs'}</h3>
                <h4>Faltan...</h4>
                <Countdown targetDate={fecha} renderer={({ days, hours, minutes, seconds }) => (
                    <div>
                        <table className={s.tabla}>
                            <tr>
                                <td>
                                    {days}
                                </td>
                                <td>
                                    {hours}
                                </td>
                                <td>
                                    {minutes}
                                </td>
                                <td>
                                    {seconds}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Dias
                                </td>
                                <td>
                                    Horas
                                </td>
                                <td>
                                    Minutos
                                </td>
                                <td>
                                    Segundos
                                </td>
                            </tr>
                        </table>
                    </div>
                )}/><br/>
            </div>
            <div className={s.btnContainer} >
              <Boton texto="Agendar" />
            </div>
        </div>
    )
};

export default CuentaRegresiva;