import { Component } from 'react';

class SubmitButton extends Component {
    render() {
        const {change, locale} = this.props;
        return (
            <div>
                <button type="button" onClick={()=>change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন'}
                </button>
            </div>
        ); 
    }
}

export default SubmitButton;