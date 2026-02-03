

const App = ()=>{

    const postFormData = (event)=>{
        event.preventDefault();
        alert('form submited')
    }

    return (
        <div>
            <form onSubmit={postFormData}>
                <input placeholder="name"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

};


export default App;