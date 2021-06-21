import './App.css';
import AddUser from './components/Users/AddUser'
import React from 'react'
import UserList from './components/Users/UserList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserList users={[]}/>
    </div>
  );
}

export default App;
