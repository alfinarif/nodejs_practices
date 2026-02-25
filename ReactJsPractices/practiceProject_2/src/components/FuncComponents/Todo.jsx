import { useState } from 'react';

const Todo = () => {

    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e)=>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? "You need Javascript skill to complete the task. Do you have it?" : null;

        setTodo(inputValue);
        setWarning(warning);
    }
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea
                name="todo"
                value={todo}
                onChange={handleInput}
                />
            </p>

            <hr/>
            <h2>
                {warning || "Good Choice!"}
            </h2>
        </div>
    );
};

export default Todo;