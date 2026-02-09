import { Component } from 'react';

class SubmitButton extends Component {
    render() {
        const {change, locale} = this.props;
        return (
            <div>
                <button type="button" onClick={()=>change(locale)}>Click Here</button>
            </div>
        );
    }
}

export default SubmitButton;