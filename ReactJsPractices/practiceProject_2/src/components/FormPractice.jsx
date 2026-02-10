import { Component } from 'react';

class FormPractice extends Component {

    state = {
        title: "input",
        textarea: "textarea",
        library: "reactJs",
    }

    changeHandler = (e)=>{
        //e.preventDefault();
        //console.log(e.target.value)

        if(e.target.type === "text"){
            this.setState({
            title: e.target.value,

            });

        } else if(e.target.type === "textarea") {
            this.setState({
            textarea: e.target.value,

            })
        }else if(e.target.type === "select-one") {
            this.setState({
            library: e.target.value,

            })
        } else {
            console.log('Nothing here!')
        }

        
    }

    render() {
        const {title, textarea, library} = this.state;
        console.log(title)
        console.log(textarea)
        console.log(library)
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Enter Name" 
                        value={title} 
                        onChange={this.changeHandler} 
                    />

                    <br/>
                    <br/>

                    <textarea 
                        name="textarea" 
                        value={textarea} 
                        onChange={this.changeHandler} >
                    </textarea>

                    <br/>
                    <br/>
                    
                    <select value={library} onChange={this.changeHandler}>

                        <option value="reactJs">ReactJs</option>
                        <option value="angular">Angular</option>

                    </select>

                    <br/>
                    <br/>

                    <input type="checkbox"/>
                </form>
                
            </div>
        );
    }
}

export default FormPractice;