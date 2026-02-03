import {useRef} from "react";


const App = ()=>{

    let myTitleId = useRef();
    let change = ()=>{
        myTitleId.current.innerText = "Hello World"
    }

    return (
        <div>
            <h1 ref={myTitleId}></h1>

            <button onClick={change}>Click</button>
        </div>
    );

};


export default App;