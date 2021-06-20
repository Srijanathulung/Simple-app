import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('addUserHandler is working')
      };
    return (
        <Card classNameProp={classes.input}> 
        <form onSubmit={(event)=>addUserHandler(event)}>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username'></input>
            <label htmlFor='age'>Age(years)</label>
            <input type='number' id='age'></input>
            <Button type='submit'>Add new user</Button>

        </form>
        </Card>
    )
 }
export default AddUser;