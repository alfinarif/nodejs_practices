


const App = ()=>{
    let status = false;

    switch (status) {
        case true:
            return <button>Logout</button>
        case false:
            return <button>Login</button>
        default:
            return <h1>Nothing returns</h1>
    }

};


export default App;