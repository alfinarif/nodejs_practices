
const App = ()=>{

    let status = true;

    if(status == true){
        return (
            <div>
                <h2>Login Status</h2>
                <button>Logout</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <h2>Login Status</h2>
                <button>Login</button>
            </div>
        );
    }

};


export default App;