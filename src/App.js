import './App.css';
import AddUser from './components/Users/AddUser'
import React, { useState } from 'react'
import UserList from './components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([])
  
  const onAddUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  }

  return (
    // <div className="App">
    <React.Fragment>
      {/* React.fragment is used to remove unnecessary div */}
      <AddUser onAddUser={onAddUserHandler }/>
      <UserList users={usersList}/>
    </React.Fragment>
    // </div>
  );
}

export default App;
