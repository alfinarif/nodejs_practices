import {useRef} from "react";


const App = ()=>{

    let formData = (event)=>{
        event.preventDefault();
        alert("hello world")
    }

    return (
        <div>
            <form onSubmit={formData}>
                <input placeholder="First Name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

};


export default App;