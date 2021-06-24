import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import ReactDom from 'react-dom';


const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.errorConfirm}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        
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
    )
}
const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {/* createPortal() takes two argument,
            1: that should be render
            2: Element where it should be rendered */}
            {ReactDom.createPortal(
                <Backdrop errorConfirm={props.errorConfirm} />,
                document.getElementById('backdrop-root')
            )}

            {ReactDom.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    errorConfirm={props.errorConfirm}
                />,
                document.getElementById('overlay-root')

            )}
        </React.Fragment>
    )
 }
export default ErrorModal;