


const App = ()=>{
    let status = false;

    return (
        <div>
            {
                status == true?
                    <button>Logout</button>
                :
                    <button>Login</button>
            }
        </div>
    )

};


export default App;