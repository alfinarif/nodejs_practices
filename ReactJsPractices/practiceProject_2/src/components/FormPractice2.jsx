import { Component } from 'react';

class FormPractice2 extends Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
    }


    inputControlHandler = (e)=>{
        if(e.target.type === "text"){
            this.setState({
                [e.target.name]: e.target.value
            })
        } else if(e.target.type === "password"){
            this.setState({
                [e.target.name]: e.target.value
            })
        } else{
            console.log('Nothing here!')
        }
        
    };


    inputSubmitHandler = (e)=>{
        e.preventDefault();
        const {fname, lname, email, password} = this.state;

        console.log(fname, lname, email, password)

    }




    render() {
        const {fname, lname, email, password} = this.state;

        return (
            <div>
                <form onSubmit={this.inputSubmitHandler}>
                    <input 
                        name="fname"
                        type="text"
                        placeholder="First Name"
                        value={fname}
                        onChange={this.inputControlHandler}
                    />
                    <br/>
                    <br/>

                    <input 
                        name="lname"
                        type="text"
                        placeholder="First Last"
                        value={lname}
                        onChange={this.inputControlHandler}
                    />
                    <br/>
                    <br/>

                    <input
                        name="email"
                        type="text"
                        placeholder="Eamil Address"
                        value={email}
                        onChange={this.inputControlHandler}
                    />
                    <br/>
                    <br/>

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.inputControlHandler}
                    />
                    <br/>
                    <br/>

                    <input
                        type="submit"
                        value="Submit"
                    />


                </form>
            </div>
        );
    }
}

export default FormPractice2;