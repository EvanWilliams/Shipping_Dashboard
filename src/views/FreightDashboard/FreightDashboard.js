import React, { Component } from 'react';
import FreightDisplayCard from '../../components/FreightDisplayCard/FreightDisplayCard';
import { connect } from 'react-redux';
import classes from './FreightDashboard.module.scss';
class FreightDashboard extends Component {

    constructor() {
        super();
        this.state ={ 

        }
    }

    render() {
        let filters = {}
        this.props.subsetOptions.forEach( (element) => {

            if(element.detail_data && element.detail_data.options){
                let whitelist = [];
                element.detail_data.options.forEach((dataElement) => {
                    if(dataElement.allowed){
                        whitelist.push(dataElement.key);
                    }
                });
                filters[element.type] = whitelist;
            }
            else if(element.detail_data && (element.detail_data.value || element.detail_data.value === '')){
                let whitelist = element.detail_data.value;
                filters[element.type] = whitelist;
            }
        });

        let filteredShipmentData = this.props.shipmentsData.filter((shipment) => {
            if(filters["STATUS"].includes(shipment.Status) && filters["MODE"].includes(shipment.Mode) && shipment["Shipment ID"].includes(filters["ID"]) && shipment["Client Name"].includes(filters["CLIENT NAME"]) ){
                return true;
            }
            else{
                return false;
            }
        });

        filteredShipmentData = filteredShipmentData.sort((a,b) =>{
            let aDate = Date.parse(a["Estimated Departure"]);
            let bDate = Date.parse(b["Estimated Departure"]);
            return aDate - bDate
        });

        return (
            <div className={classes["shipment-display"]}>
                <div className={classes["shipment-display--header"]}>Status of Open Shipments</div>
                <div className={classes["shipment-display--grid"]}>
                    {filteredShipmentData.map((shipment) => {
                        return (
                            <FreightDisplayCard
                                key={shipment["Shipment ID"]}
                                shipmentData={shipment}
                            >
                            </FreightDisplayCard>
                        )
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        shipmentsData: state.FreightShipmentsData,
        subsetOptions: state.subsetOptions
    };
}

export default connect(mapStateToProps)(FreightDashboard);