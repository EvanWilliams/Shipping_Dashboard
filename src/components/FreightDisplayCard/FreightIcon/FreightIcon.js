import React,{ Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrain, faShip, faPlane } from '@fortawesome/free-solid-svg-icons'
import classes from './FreightIcon.module.scss';
class FreightIcon extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render(){
        let freightIcon = null;
        if(this.props.travelType === "Air"){
            freightIcon = (<FontAwesomeIcon icon={faPlane} />)
        }
        else if(this.props.travelType === "Sea"){
            freightIcon = (<FontAwesomeIcon icon={faShip} />)
        }
        else if(this.props.travelType === "Rail"){
            freightIcon = (<FontAwesomeIcon icon={faTrain} />)
        }
        return(
            <div className={classes["freight-icon"]}>
                {freightIcon}
            </div>
        );
    }
}


export default FreightIcon;