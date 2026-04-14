import { useState } from "react";
import Buscador from "./components/Buscador";
import TarjetaClima from "./components/TarjetaClima";

export default function App()
{

  const [clima, setClima] = useState(null); //Cremos el estado clima y lo iniciamos como nulo

    function buscarClima(nomPais) //Le pasamos el pais a la funcion buscarClima
    {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${nomPais}&appid=91515ce8c6632a5daeb258f3b6090876&units=metric&lang=es`

        fetch(url)
        .then(res => res.json()) //Funcion que returna el clima, pero lo convierte a json, la API lo de vuelve como response
        .then(data => {
          console.log(data);
          setClima(data);
        }); //Aqui mostramos la informacion
    }

  return(
    <div>
      {/*retornamos la funcion buscarClima*/}
      <Buscador onBuscar={buscarClima} /> 

      {/*Condicion si clima no es false, entonces muestra TarjetaClima con clima*/}
      {clima && <TarjetaClima clima={clima} />} 
    </div> 

  );
}
