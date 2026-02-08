import { Component } from 'react';
import Button from './Button';

class ClockComponent4 extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), locale: 'bn-BD'};
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

    handleClick = (locale)=>{
        this.setState({
            locale
        });

    }


    render() {
        console.log('This is Clock Component');
        return (
            <div>
                <h1>
                    <span>
                        {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </h1>
                
                <Button change={this.handleClick} locale="en-US"> Click Here </Button>

            </div>
        );
    }
}

export default ClockComponent4;