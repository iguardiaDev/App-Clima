export default function TarjetaClima(props)
{
    return(

        <div>
            
            <h2>{props.clima.name}</h2>
            <p>{props.clima.main.temp}</p>
            <p>{props.clima.weather[0].description}</p>
            <p>{props.clima.wind.speed}</p>
            <p>{props.clima.main.humidity}</p>
            
        </div>
    )
}