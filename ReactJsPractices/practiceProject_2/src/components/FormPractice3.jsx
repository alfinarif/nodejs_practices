import { Component } from 'react';

class FormPractice3 extends Component {
    state = {
        email: "",
        password: "",
    }

    formControllHandler = (e)=>{
        if(e.target.type === "email"){
            this.setState({
                email: e.target.value,
            });
        } else if(e.target.type === "password"){
            this.setState({
                password: e.target.value,
            })
        } else{
            console.log('Nothing here!')
        }
    };


    formSubmitHandler = (e)=>{
        e.preventDefault();
        const {email, password} = this.state;
        console.log(email, password)
    }



    render() {

        const {email, password} = this.state;

        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Example@gmail.com"
                        value={email}
                        onChange={this.formControllHandler}
                    />
                    <br/>
                    <br/>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.formControllHandler}
                    />
                    <br/>
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        );
    }
}

export default FormPractice3;