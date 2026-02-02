import Hero from "./components/Hero.jsx";


const App = ()=>{

    const buttonClick = ()=>{
        alert('Hello world');
    }

    return (
        <div>
            <Hero btnClick={buttonClick}/>
        </div>
    )

};


export default App;