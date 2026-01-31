
const App = ()=>{

    let marks = 81;

    return (
        <div>
            {
                marks > 80?<h1>Brilliant Result</h1>
                : 
                <h1>Avarage Result</h1>
            }
        </div>
    );

};


export default App;