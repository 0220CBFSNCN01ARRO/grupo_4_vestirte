import React from 'react';

function Fila(props) {
    return (
        <tr>
            <td>{props.nombre}</td>
            <td>{props.descripcion}</td>
            <td>{props.descuento}</td>
            <td>{props.categoria}</td>
            <td>{props.envio}</td>
            <td>{props.stock}</td>
            <td>{props.link}</td>
        </tr>
    );
}

export default Fila;