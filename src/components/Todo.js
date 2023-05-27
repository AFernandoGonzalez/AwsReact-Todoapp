import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, { task: taskInput, completed: false }]);
        setTaskInput('');
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={taskInput} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                    >
                        {task.task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default Todo