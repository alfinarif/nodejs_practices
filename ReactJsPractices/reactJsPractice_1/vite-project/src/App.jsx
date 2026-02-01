


const App = ()=>{
    let status = true;

    return (
        <div>
            <h1>Login Status</h1>
            {status && <button>Logout</button>}
        </div>
    )

};


export default App;