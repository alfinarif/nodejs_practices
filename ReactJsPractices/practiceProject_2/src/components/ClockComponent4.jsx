import { Component } from 'react';

class ClockComponent4 extends Component {
    render() {
        return (
            <div>
                <h1>
                    <span>
                        {new Date().toLocaleTimeString()}
                    </span>
                </h1>
            </div>
        );
    }
}

export default ClockComponent4;