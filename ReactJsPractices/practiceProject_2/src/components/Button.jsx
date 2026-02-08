import { Component } from 'react';

class Button extends Component {

    shouldComponentUpdate(nextProps){
        const {change:currentChange, currentLocale} = this.props;
        const {change:nextChange, nextLocale} = nextProps;

        if(currentChange === nextChange && nextLocale === currentLocale){
            return false;
        }else {
            return true;
        }
    }


    render() {
        console.log("This is Button Component")

        const {change, locale} = this.props;

        return (
            
                <button type="button" onClick={()=>change(locale)}>
                    Click Here
                </button>
        );
    }
}

export default Button;