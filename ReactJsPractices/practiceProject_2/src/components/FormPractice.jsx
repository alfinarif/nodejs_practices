import { Component } from 'react';

class FormPractice extends Component {

    state = {
        title: "JavaScript"
    }

    changeHandler = (e)=>{
        //e.preventDefault();
        console.log(e.target.value)

        this.setState({
            title: e.target.value
        })
    }

    render() {
        const {title} = this.state;
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter Name" 
                        value={title} 
                        onChange={this.changeHandler} 
                    />
                    <p>{title}</p>
                </form>
                
            </div>
        );
    }
}

export default FormPractice;