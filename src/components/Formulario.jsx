import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from '../components/Error'


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;
    outline: none;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

    const [ error, setError ] = useState(false);

    //state del listado de criptomonedas

    const [ listacripto, setCriptomonedas ] = useState([]);

    const monedas = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'CAD', nombre: 'Dolar de Canadá'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    //UTILIZAR USEMONEDA

    const [ moneda, SelectMonedas ] = useMoneda('Elige tu Moneda', '', monedas)
    
    //UTILIZAR USECRIPTOMONEDA

    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto)
    
    //EJECUTAR LLAMADO A LA API

    useEffect(() => {
        const consultarAPI = async () => {
            const url ='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const consulta = await axios.get(url);
            setCriptomonedas(consulta.data.Data);
        }

        consultarAPI();
    }, [])

    //cuando el usuario hace submit

    const cotizarMoneda = (e) => {
        e.preventDefault();

        if(moneda === '' || criptomoneda === ''){
            setError(true);
            return;
        }

        //pasar los datos al componente principal

        setError(false);
        setMoneda(moneda);
        setCriptomoneda(criptomoneda);
    }


    return ( 
        <form
            onSubmit={cotizarMoneda}
        >

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            
            <SelectMonedas />

            <SelectCripto />

            <Boton
                type="submit"
                value="Obtener Cotización"
            />
        </form>
     );
}

 
export default Formulario;
