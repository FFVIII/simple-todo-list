import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);

  // addTask function 
  const addTask = () => {
    if(inputValue.trim() !== ''){
      setTaskList([...taskList, {text: inputValue, completed: false}])
      setInputValue('')
    }else{
      alert("Can you enter something on it")
    }
  }

  // delete function 
  const deleteTask = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList.splice(index, 1)
    setTaskList(updatedTaskList)
  }

  const ToggleEvent = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].completed = !updatedTaskList[index].completed
    setTaskList(updatedTaskList)
  }


  return (
    <div className="App">
      <input 
        type='text'
        value={inputValue}
        onChange={e=>setInputValue(e.target.value)}
      />
      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {taskList.map( (task, index) => (
          <li key={index}>
            <input 
              type='checkbox'
              value={task.completed}
              onChange={() => ToggleEvent(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
