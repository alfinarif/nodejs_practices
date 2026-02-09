import { Component } from 'react';
import SubmitButton from './SubmitButton';

class ClockPractice5 extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), locale: "en-US"};

    }

    tick = ()=>{
        this.setState({
            date: new Date()
        })
    }

    componentDidMount = ()=>{
        this.clockTimer = setInterval(()=>{
            this.tick();
        })
    }

    componentWillUnmount = ()=>{
        clearInterval(()=>{
            this.clockTimer;
        })
    }


    submitButtonHandler = (locale)=>{
        this.setState({
            locale
        })
    }



    render() {
        return (
            <div>
                <h1>
                    <span>
                        {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </h1>

                <SubmitButton change={this.submitButtonHandler} locale="bn-BD"/>
            </div>
        );
    }
}

export default ClockPractice5;