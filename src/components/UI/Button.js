import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

    // type={ props.type || 'button'} this is  done to add button type dynamically
    return (
        <button
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}
        // onClick={props.onClicked}
        >
        {props.children}
        </button>
    )
 }
export default Button;