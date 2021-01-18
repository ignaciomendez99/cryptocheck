import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled/';



const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;

    
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1.1rem;

`;

const useMoneda = (label, stateInicial, opciones) => {


    //State del custom hook

    const [ state, setState ] = useState(stateInicial);


    const Seleccionar = () => {

        return(
            <Fragment>
                <Label>{label}</Label>
                <Select
                    onChange={ e => setState(e.target.value)}
                    value={state}
                >
                    <option value="">-- Seleccionar --</option>
                    {opciones.map(opcion => (
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}
                </Select>
            </Fragment>

        );
    };
    //RETORNAR STATE, INTERDAZ Y FUNCION QUE MODIFICA EL STATE

    return [state, Seleccionar, setState];

}

export default useMoneda;