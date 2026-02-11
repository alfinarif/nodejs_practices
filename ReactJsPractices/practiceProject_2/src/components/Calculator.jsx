import { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends Component {
    state = {
        temperature: "",
    }

    temparetureChange = (e)=>{
        this.setState({
            temperature: e.target.value,
        })
    }
    render() {
        const {temperature} = this.state;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in Celsius: </legend>
                    <input type="text" value={temperature} onChange={this.temparetureChange} />
                </fieldset>

                <BoilingVerdict celsius={temperature} />
            </div>
        );
    }
}

export default Calculator;