import React from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType){
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder} 
                name={props.name}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder} 
                name={props.name} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map((option) =>(
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
                );
            break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;