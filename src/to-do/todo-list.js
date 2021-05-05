import React, { useState } from 'react';
import './to-do.css';

function TodoList() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const newTask = {
        id: new Date().getTime().toString(),
        task,
        check: false,
      };
      setList((list) => {
        return [...list, newTask];
      });
      setTask('');
    }
  };

  const removeTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const handleCheck = (id) => {
    const index = list.findIndex((task) => task.id === id);
    let newList = [...list];
    let task = { ...list[index] };
    task.check = task.check ? false : true;
    newList[index] = task;
    setList(newList);
  };

  return (
    <>
      <div className='main'>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
          integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
          crossorigin='anonymous'
        />
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='task'
            id='task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='add' type='submit'>
            <b className='fa fa-plus'></b> Add Task
          </button>
        </form>
        <br />
        {list.map((eachTask) => {
          const { id, task, check } = eachTask;
          return (
            <div key={id} className='list' draggable>
              <label
                htmlFor='done'
                className='item'
                style={{ textDecoration: check ? 'line-through' : 'none' }}
              >
                {task}
                <input
                  type='checkbox'
                  value={check}
                  onClick={() => handleCheck(id)}
                />
              </label>
              <button onClick={() => removeTask(id)}>
                <span className='fa fa-trash'></span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
