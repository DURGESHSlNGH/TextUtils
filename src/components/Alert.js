import React from 'react';

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function Alert(props) {
    return (
        <div style = {{height: '50px'}}>
        {/* We have written prop.alert && because we're ensuring that if the the value of the prop.alert is null then none of these alerts will appear. And we have used {} <- this because basicaaly we can't write props.alert we have to write it in javascript and for that we have to use curly brackets.*/}
        {props.alert && (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
            </div>
        )}
        </div>
    );
}

export default Alert;
