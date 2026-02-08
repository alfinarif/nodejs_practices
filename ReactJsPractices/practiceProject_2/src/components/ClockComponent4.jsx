import { Component } from 'react';

class ClockComponent4 extends Component {
    state = {date: new Date(), locale: 'bn-BD'};

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.clockTimer = setInterval(()=>{
            this.tick();
        })
    }

    componentWillUnmount(){
        clearInterval(()=>{
            this.clockTimer;
        })
    }

    handleClick = ()=>{
        this.setState({
            locale: 'en-US',
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
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        );
    }
}

export default ClockComponent4;