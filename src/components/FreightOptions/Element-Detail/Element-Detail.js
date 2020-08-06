import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/FreightDashboard/FreightDashboard';
import FreightIcon from '../../FreightDisplayCard/FreightIcon/FreightIcon';
import classes from './Element-Detail.module.scss';

class ElementDetail extends Component {
    constructor() {
        super();
        this.state = {
        
        }
        this.onCheckboxChange = ( index) => {
            let updatedSelectedSubsetOption = {...this.props.selectedSubsetOption}
            updatedSelectedSubsetOption.detail_data.options[index].allowed = !this.props.selectedSubsetOption.detail_data.options[index].allowed;
            this.props.onSelectedSubsetOptionChanged(updatedSelectedSubsetOption,updatedSelectedSubsetOption.id);
        }
        this.onInputChange = (event) => {
            let updatedSelectedSubsetOption = {...this.props.selectedSubsetOption}
            updatedSelectedSubsetOption.detail_data.value = event.target.value;
            this.props.onSelectedSubsetOptionChanged(updatedSelectedSubsetOption,updatedSelectedSubsetOption.id);
        }
        
    }
     
    render(){

        let renderedOptions = null;
        if( this.props.selectedSubsetOption ) {
            if(this.props.selectedSubsetOption.detail_data.type==='checkbox'){
                let checkboxes = Object.entries(this.props.selectedSubsetOption.detail_data.options).map((option,index) => {
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
                        <div className={classes["checkbox-wrapper"]}>
                            <div>
                                <span className={classes["caption"]+' '+ (statusCode ? classes[statusCode] : '')}>{option[1].key}</span>
                                <span>{icon}</span>
                            </div>
                            <input type="checkbox" onChange={(event) => {this.onCheckboxChange(index)}} checked={option[1].allowed}></input>
                        </div>
                    )
                })
                renderedOptions = (
                    <div className={classes["selected-subset-options--checkbox"]}>
                        <div className={classes["disclaimer"]}>Checkboxes toggle visiblity for all shipments {this.props.selectedSubsetOption.type} </div>
                        {checkboxes}
                    </div>
                )
            }
            if(this.props.selectedSubsetOption.detail_data.type==='input'){
                renderedOptions = (
                    <div className={classes["selected-subset-options--input"]}>
                        <div>Input Searches all shipments {this.props.selectedSubsetOption.type}s (Case sensitive)</div>
                        <div>
                            <span className={classes["caption"]}>{this.props.selectedSubsetOption.type}</span>
                            <input type="input" onChange={(event) => this.onInputChange(event)} value={this.props.selectedSubsetOption.detail_data.value}></input>
                        </div>
                    </div>
                )
            }
        }
        return(
            <div className={classes["element-detail"]+" "+(this.props.selectedSubsetOption ? "" : classes["striped-box"])}>
                {this.props.selectedSubsetOption ? <div className="">Selected Subsection Options</div>: null}
                {renderedOptions}
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

export default connect(mapStateToProps,mapDispatchToProps)(ElementDetail);