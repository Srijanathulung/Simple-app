import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    
    
   
    //It listen to the event
    const userNameChangeHandler = (event) => {
         setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log('addUserHandler is working')
        // console.log(enteredUserName, enteredUserAge)
        console.log('enteredUserName=' + enteredUserName + ' enteredUserAge=' + enteredUserAge)
        setEnteredUserName('');
        setEnteredUserAge('');
      };
    return (
        <Card classNameProp={classes.input}> 
        <form onSubmit={(event) => addUserHandler(event)}>
                
            <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    id='username'
                    value={enteredUserName}
                    onChange={(event) => userNameChangeHandler(event)}
                />
                
            <label htmlFor='age'>Age(years)</label>
                <input
                    type='number'
                    id='age'
                    value={enteredUserAge}
                    onChange={(event) => userAgeChangeHandler(event) }
                />
                
            <Button type='submit'>Add new user</Button>

        </form>
        </Card>
    )
 }
export default AddUser;