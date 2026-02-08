import { Component } from 'react';

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
        return (
            <div>
                <h1>
                    <span>
                        {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </h1>
                <button onClick={()=>this.handleClick('en-US')}>Click Here</button>
            </div>
        );
    }
}

export default ClockComponent4;