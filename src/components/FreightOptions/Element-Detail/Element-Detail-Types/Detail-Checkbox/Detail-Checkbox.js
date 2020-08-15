import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/FreightDashboard/FreightDashboard';
import FreightIcon from '../../../../FreightDisplayCard/FreightIcon/FreightIcon';
import classes from './Detail-Checkbox.module.scss';

class DetailCheckbox extends Component {
    constructor() {
        super();
        this.state = {
        
        }
        this.onCheckboxChange = ( index) => {
            let updatedSelectedSubsetOption = {...this.props.selectedSubsetOption}
            updatedSelectedSubsetOption.detail_data.options[index].allowed = !this.props.selectedSubsetOption.detail_data.options[index].allowed;
            this.props.onSelectedSubsetOptionChanged(updatedSelectedSubsetOption,updatedSelectedSubsetOption.id);
        }
    }

    render(){
        let checkboxes = Object.entries(this.props.options).map((option,index) => {
            let statusCode = '';
            let icon =  null;
            //to show icons for MODE
            (this.props.selectedSubsetOption.type === 'MODE' ?  icon = <FreightIcon travelType={option[1].key}></FreightIcon> : icon = null) 
            //to show colors for STATUS
            if(option[1].key === "Roll-Over" || option[1].key === "TransportError"){
                statusCode="critical";
            }
            else if (option[1].key === "Cancelled"){
                statusCode="cancelled";
            }
            else if (option[1].key === "Customs Hold"){
                statusCode="delayed";
            }
            else if (option[1].key === "In Transit"){
                statusCode="transit";
            }
            else if (option[1].key === "Arrived"){
                statusCode="arrived";
            }
            
            return(
                <div className={classes["checkbox-wrapper"]+ ' '+ (statusCode ? classes[statusCode] : '')}>
                    <div>
                        <span className={classes["caption"]+' '+ (statusCode ? classes[statusCode] : '')}>{option[1].key}</span>
                        <span>{icon}</span>
                    </div>
                    <input type="checkbox" onChange={() => {this.onCheckboxChange(index)}} checked={option[1].allowed}></input>
                </div>
            )
        })
        return(
            <div className={classes["selected-subset-options--checkbox"]}>
                <div className={classes["disclaimer"]}>Checkboxes toggle visiblity for all shipments {this.props.type} </div>
                {checkboxes}
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectedSubsetOptionChanged: (updatedSubset,id,payload) => dispatch(actions.updateSelectedSubsetOption(updatedSubset,id,payload))
    };
}
const mapStateToProps = state => {
    return{
        selectedSubsetOption: state.selectedSubsetOption
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailCheckbox);

