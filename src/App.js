import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUserName } from './features/Users';
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.value)
  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');
  
  const handleAddTodo = () =>{
    dispatch(addUser({ id: nanoid(), name }));
    setName('')
  }
  return (
    <div className="App">
      <div className='todoHeader'>
        <h1>TODO LIST</h1>
      </div>
      <div className='addUser'>
        <input type='text' placeholder='Name...' value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit' onClick={handleAddTodo}>Add User</button>
      </div>
      <div className='displayUsers'>
        {
          userList.map(user => (
            <div key={user.id} className='userItem'>
              <div className='todoName'>
                <input className='checked' type='checkbox' id={user.id} />  
                <label htmlFor={user.id} > {user.name} </label>
              </div>
              <div className='todoCrud'>
                <input type='text' placeholder='New Name...' onChange={(e) => setNewName(e.target.value)} />
                <button className='updateBtn' onClick={() => dispatch(updateUserName({ id: user.id, name: newName }))}>Update</button>
                <button className='deleteBtn' onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
