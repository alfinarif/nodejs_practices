
const App = ()=>{

    let item = ['A', 'B', 'C', 'D'];

    return (
        <div>
            <select>
                {
                    item.map((item, i)=>{
                        return <option key={i.toString()}>{item}</option>
                    })
                }
            </select>
        </div>
    );

};


export default App;