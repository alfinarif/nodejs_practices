


const App = ()=>{
    let status = false;

    return (
        <div>
            {(()=>{
                if(status == true){
                    return <button>Logout</button>
                }
                else {
                    return <button>Login</button>
                }
            })()}
        </div>
    )

};


export default App;