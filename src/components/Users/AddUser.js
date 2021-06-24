import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    //connecting ref with input
    const nameInputRef = useRef();//its an object and always hold the current value
    const ageInputRef = useRef();

    // we are using 'ref' to get the value so all setState can be removed from the code
    // const [enteredUserName, setEnteredUserName] = useState('')
    // const [enteredUserAge, setEnteredUserAge] = useState('')

    const [error, setError] = useState();
    
    
   
    //It listen to the event
    // const userNameChangeHandler = (event) => {
    //      setEnteredUserName(event.target.value)
    // }

    // const userAgeChangeHandler = (event) => {
    //     setEnteredUserAge(event.target.value)
    // }

    const addUserHandler = (event) => {
        event.preventDefault();
        // console.log(nameInputRef);
        // console.log(nameInputRef.current.value);
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        // if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length=== 0) {
        if (enteredName.trim().length === 0 || enteredAge.trim().length=== 0) {
            // console.log('Enter the username and id')
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name andd age'
            });
            return; 
        } 
        //+enteredUserAge '+' works as a parseInt
        // if (+enteredUserAge < 1) {
        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age greater than 0'
            })
            return;
        }
        // props.onAddUser(enteredUserName,enteredUserAge);
        props.onAddUser(enteredName,enteredAge);
        console.log('enteredName=' + enteredName + ' enteredAge=' + enteredAge)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
            // console.log('enteredUserName=' + enteredUserName + ' enteredUserAge=' + enteredUserAge)
            // setEnteredUserName('');
            // setEnteredUserAge('');
        // console.log(enteredUserName, enteredUserAge)
    };
    
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
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
                    // value={enteredUserName}
                    // onChange={(event) => userNameChangeHandler(event)}
                    ref={nameInputRef}    
                />
                
            <label htmlFor='age'>Age(years)</label>
                <input
                    type='number'
                    id='age'
                    // value={enteredUserAge}
                    // onChange={(event) => userAgeChangeHandler(event)}
                    ref={ageInputRef}    
    
                />
                
                    <Button
                        type='submit'
                    >Add new user</Button>

        </form>
        </Card>
        </Wrapper>
        
    )
 }
export default AddUser;