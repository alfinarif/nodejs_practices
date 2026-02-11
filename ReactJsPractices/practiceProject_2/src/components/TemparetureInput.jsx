import { Component } from 'react';

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
}
class TemparetureInput extends Component {
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
        const {scale} = this.props;
        return (

                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}: </legend>
                    <input type="text" value={temperature} onChange={this.temparetureChange} />
                </fieldset>

        );
    }
}

export default TemparetureInput;