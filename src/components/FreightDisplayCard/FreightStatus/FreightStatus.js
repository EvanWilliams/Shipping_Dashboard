import React from 'react';
import classes from './FreightStatus.module.scss'

const FreightStatus = (props) => {
    let statusCode = '';
    if(props.status === "Roll-Over" || props.status === "TransportError"){
        statusCode="critical";
    }
    else if (props.status === "Cancelled"){
        statusCode="cancelled";
    }
    else if (props.status === "Customs Hold"){
        statusCode="delayed";
    }
    else if (props.status === "In Transit"){
        statusCode="transit";
    }
    else if (props.status === "Arrived"){
        statusCode="arrived";
    }
    return (<div>Status: <span className={classes[statusCode]}>{props.status}</span></div>)
}

export default FreightStatus;