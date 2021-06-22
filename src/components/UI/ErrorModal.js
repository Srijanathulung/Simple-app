import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
    return (
        <div>

        <div className={classes.backdrop} onClick={props.errorConfirm}></div>
        <Card classNameProp={classes.modal}>
            <header className={classes.header}>
                <h2>{ props.title }</h2>
            </header>
            <div className={classes.content}>
                <p>{ props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.errorConfirm}>Okay</Button>
                    {/* <Button onClicked={props.errorConfirm}>Okay</Button>
                    (linked with ErrorModal Component) */}

            </footer>
        </Card>
        </div>
    )
 }
export default ErrorModal;