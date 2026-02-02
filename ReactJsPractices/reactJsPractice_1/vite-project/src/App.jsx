import Hero from "./components/Hero.jsx";


const App = ()=>{
    let itemObj = {
        id: "232",
        name: "Alfin Arif",
        email: "alfin@gmail.com",
        age: 29,
        city: "Cumilla",
        remark: "Backend Developer"
    }

    return (
        <div>
            <Hero item={itemObj}/>
        </div>
    )

};


export default App;