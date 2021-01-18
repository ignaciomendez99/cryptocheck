import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
`;


const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado) === 0) return null;

    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>$ {resultado.PRICE}</span></Precio>
            <Parrafo>El precio más alto del día es: <span>$ {resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio más bajo del día es: <span>$ {resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Variación en las últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}%</span></Parrafo>
            <Parrafo>Última Actualización: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </ResultadoDiv>
     );
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Cotizacion;

