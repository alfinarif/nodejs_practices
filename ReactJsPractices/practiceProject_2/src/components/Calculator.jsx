import { Component } from 'react';
import TemparetureInput from './TemparetureInput';

class Calculator extends Component {

    render() {
        return (
            <div>
                
                <TemparetureInput scale="c"  />
                <br/>
                <TemparetureInput scale="f"  />

            </div>
        );
    }
}

export default Calculator;