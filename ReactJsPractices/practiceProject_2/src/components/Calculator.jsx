import { Component } from 'react';
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

        return (
            <div>
                
                <TemparetureInput 
                    scale="c"  
                />

                <br/>

                <TemparetureInput 
                    scale="f"  
                />

            </div>
        );
    }
}

export default Calculator;