import { useState } from "react"; //Importamos useState de react
import './Buscador.css';

export default function Buscador(props)
{
    const [nomPais, setPais] = useState(''); //Creamos un estado vacio para el pais que buscaremos

    return(

        <div>
            
            {/*
             Guardamos lo que escribio el usuario en nomPais, recordemos que setPais 
             es solo una funcion en este caso agarra lo que el usuario escribio
            */}
            <input
            placeholder="Escribe un pais..."
            onChange={function(e) {setPais(e.target.value)}} 
            />

            {/*El button llama a la funcion buscarClima y cada vez que hagamos click va buscar lo que este guardado en nomPais*/}
            <button onClick={() => props.onBuscar(nomPais)}>Buscar</button> 

        </div>

        

    );
}