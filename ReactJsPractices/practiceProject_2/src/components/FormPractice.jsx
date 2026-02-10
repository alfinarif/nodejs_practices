import { Component } from 'react';

class FormPractice extends Component {

    state = {
        title: "input",
        textarea: "textarea",
        library: "reactJs",
        isAwesome: true,
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
        }else if(e.target.type === "checkbox") {
            this.setState({
            isAwesome: e.target.checked,

            })
        } else {
            console.log('Nothing here!')
        }

        
    };


    submitHandler = (e)=>{
        const {title, textarea, library, isAwesome} = this.state;
        e.preventDefault();
        console.log(title, textarea, library, isAwesome)

    }

    render() {
        const {title, textarea, library, isAwesome} = this.state;
        

        return (
            <div>
                <form onSubmit={this.submitHandler}> 
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

                    <input 
                        type="checkbox" 
                        checked={isAwesome} 
                        onChange={this.changeHandler} 
                    />

                    <br/>
                    <br/>

                    <input type="submit" value="Submit"/>

                </form>
                
            </div>
        );
    }
}

export default FormPractice;