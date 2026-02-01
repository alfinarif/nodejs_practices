
const App = ()=>{

    let city = ['Dhaka', 'Cumilla', 'Khulna', 'Borishal'];

    return (
        <div>
            <select>
                {
                    city.map((item, i)=>{
                        return <option key={i.toString()}>{item}</option>
                    })
                }
            </select>
        </div>
    );

};


export default App;