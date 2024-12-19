import './App.css';
import React, { useState } from 'react';

function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [taskList, setTaskList] = useState([]);

  // addTask function 
  const addTask = () => {
    if(inputValue.trim() !== ''){
      setTaskList([...taskList, {text: inputValue, completed: false, isEditing: false}])
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

  const toggleTask = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].completed = !updatedTaskList[index].completed
    setTaskList(updatedTaskList)
  }

  const toggleEdit = (index) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].isEditing = !updatedTaskList[index].isEditing
    setTaskList(updatedTaskList)
  }

  const editTask = (index, newText) => {
    const updatedTaskList = [...taskList]
    updatedTaskList[index].text = newText;
    updatedTaskList[index].isEditing = false;
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
              onChange={() => toggleTask(index)}
            />

            {task.isEditing ? (
              <input 
                type='text'
                defaultValue={task.text}
                onBlur={(e) => editTask(index, e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            )}

            <button onClick={() => toggleEdit(index)}>{task.isEditing ? 'save' : 'edit'}</button>

            <span style={{marginLeft: 10}}>
              <button onClick={() => deleteTask(index)}>Remove</button>
            </span>
           
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
