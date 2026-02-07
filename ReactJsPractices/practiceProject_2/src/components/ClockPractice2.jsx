import { Component } from 'react';

class ClockPractice2 extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.clockTimer = setInterval(()=>{
            this.tick()
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(()=>{
            this.clockTimer
        })
    }


    render() {
        return (
            <div>
                <h1>
                    <span>
                        {this.state.date.toLocaleTimeString(this.props.locale)}
                    </span>
                </h1>
            </div>
        );
    }
}

export default ClockPractice2;