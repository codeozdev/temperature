import "./App.css";
import {useState} from "react";

function App() {
    const [temperatureValue, setTemperature] = useState(10)
    const [temperatureColor, setTemperatureColor] = useState('cold')

    const increase = () => {
        if (temperatureValue === 30) return
        const newTemperature = temperatureValue + 1
        if (newTemperature >= 15) {
            setTemperatureColor('hot')
        }
        setTemperature(newTemperature)
    }

    const decrease = () => {
        if (temperatureValue === -5) return
        const newTemperature = temperatureValue - 1
        if (newTemperature < 15) {
            setTemperatureColor('cold')
        }
        setTemperature(newTemperature)
    }

    return <div className="container">

        <div className={`deg ${temperatureColor}`}>{temperatureValue}°C</div>
        <div className={'btn'}>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </div>;
}

export default App;
