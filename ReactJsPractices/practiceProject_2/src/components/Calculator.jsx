import { Component } from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemparetureInput from './TemparetureInput';

class Calculator extends Component {
    state = {
        temperature: "",
        scale: "c",
    };

    handleChange = (e, scale)=>{
        this.setState({
            temperature: e.target.value,
            scale,
        })
    };

    render() {

        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                
                <TemparetureInput 
                    scale="c"
                    temperature={celsius}
                    onTamperatureChange={this.handleChange}
                />

                <br/>

                <TemparetureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTamperatureChange={this.handleChange}
                />

                <BoilingVerdict celsius={parseFloat(temperature)} />
                
            </div>
        );
    }
}

export default Calculator;