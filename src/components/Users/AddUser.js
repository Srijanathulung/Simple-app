import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [error, setError] = useState();
    
    
   
    //It listen to the event
    const userNameChangeHandler = (event) => {
         setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length=== 0) {
            // console.log('Enter the username and id')
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name andd age'
            });
            return; 
        } 
        //+enteredUserAge '+' works as a parseInt
        if (+enteredUserAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age greater than 0'
            })
            return;
        }
        props.onAddUser(enteredUserName,enteredUserAge);
            console.log('enteredUserName=' + enteredUserName + ' enteredUserAge=' + enteredUserAge)
            setEnteredUserName('');
            setEnteredUserAge('');
        // console.log(enteredUserName, enteredUserAge)
    };
    
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
           { error && ( 
                < ErrorModal
                //key shhould be added when elements are wrapped in array
                    // key='error-modal'
                title={error.title}
                message={error.message}
                errorConfirm={errorHandler}
                />
            )}
            <Card
                // key='add-user-card'
                classNameProp={classes.input}>
                
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
                
                    <Button
                        type='submit'
                    >Add new user</Button>

        </form>
        </Card>
        </div>
        
    )
 }
export default AddUser;