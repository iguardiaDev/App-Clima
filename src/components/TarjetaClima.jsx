import './TarjetaClima.css'

export default function TarjetaClima(props) {
    return (
        <div className="tarjeta">
            <h2>{props.clima.name}</h2>
            <p className="temperatura">{Math.round(props.clima.main.temp)}°C</p>
            <p className="descripcion">{props.clima.weather[0].description}</p>
            <div className="detalles">
                <div className="detalle-item">
                    <p className="detalle-valor">{props.clima.main.humidity}%</p>
                    <p className="detalle-label">Humedad</p>
                </div>
                <div className="detalle-item">
                    <p className="detalle-valor">{props.clima.wind.speed} m/s</p>
                    <p className="detalle-label">Viento</p>
                </div>
                <div className="detalle-item">
                    <p className="detalle-valor">{Math.round(props.clima.main.feels_like)}°C</p>
                    <p className="detalle-label">Sensación</p>
                </div>
            </div>
        </div>
    );
}