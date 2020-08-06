import React,{ Component} from 'react';
import classes from './FreightDisplayCard.module.scss';
import FreightStatus from './FreightStatus/FreightStatus';
import FreightIcon from './FreightIcon/FreightIcon';
import FreightToggle from './FreightToggle/FreightToggle';
class FreightDisplayCard extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false
        }

    }

    render(){

        return(
            <div className={classes["freight-display-card"]}>
                <div className={classes["freight-display--client-name"]}>{this.props.shipmentData["Client Name"]}</div>
                <div className={classes["freight-display--transportation-schedule"]}>
                    <div className={classes["departure"]}>Departure: {this.props.shipmentData["Estimated Departure"]}</div>
                    <div className={classes["arrival"]}>Arrival: {this.props.shipmentData["Estimated Arrival"]}</div>
                </div>
                <div className={classes["shipment-id"]}>
                    <div>
                        <span>ID: </span>
                        <span className={classes["shipment-id-text"]}>{this.props.shipmentData["Shipment ID"]}</span>
                    </div>
                </div>
                <div className={classes["freight-display--transportation-modestatus"]}>
                    <FreightStatus status={this.props.shipmentData["Status"]}></FreightStatus>
                    <div className={classes["shipping-mode"]}>Mode: <FreightIcon travelType={this.props.shipmentData["Mode"]}></FreightIcon></div>
                </div>
                <FreightToggle sourceinfo={{"destination":this.props.shipmentData["Destination"],"origin":this.props.shipmentData["Origin"]}}></FreightToggle>
            </div>
        );
    }
}


export default FreightDisplayCard;