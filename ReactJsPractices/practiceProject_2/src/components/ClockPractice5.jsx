import { Component } from 'react';

import SubmitButton from './SubmitButton';

class ClockPractice5 extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), locale: "bn-BD"};

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
        const {date, locale} = this.state;
        
        let button;

        if(locale === "bn-BD"){
            button = (
                <SubmitButton change={this.submitButtonHandler} locale="en-US"/>
            )
        } else {
            button = (
                <SubmitButton change={this.submitButtonHandler} locale="bn-BD"/>
            )
        }


        return (
            <div>
                <h1>
                    <span>
                        {date.toLocaleTimeString(locale)}
                    </span>
                </h1>

                
                {/* {button} */}

                {locale === 'bn-BD' ? (
                    <SubmitButton change={this.submitButtonHandler} locale="en-US"/>)
                : 
                    (<SubmitButton change={this.submitButtonHandler} locale="bn-BD"/>)
                }


            </div>
        );
    }
}

export default ClockPractice5;