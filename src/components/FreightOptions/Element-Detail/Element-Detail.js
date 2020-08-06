import React, { Component } from 'react';
import { connect } from 'react-redux';
 import * as actions from '../../../store/actions/FreightDashboard/FreightDashboard';
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
            if(this.props.selectedSubsetOption.detail_data.type=='checkbox'){
                renderedOptions = Object.entries(this.props.selectedSubsetOption.detail_data.options).map((option,index) =>{
                    return(
                        <div>
                            <div>{option[1].key}</div>
                            <input type="checkbox" onChange={(event) => {this.onCheckboxChange(index)}} checked={option[1].allowed}></input>
                        </div>
                    )
                })
            }
            if(this.props.selectedSubsetOption.detail_data.type=='input'){
                renderedOptions = (
                    <div>
                        <div>{this.props.selectedSubsetOption.detail_data.key}</div>
                        <input type="input" onChange={(event) => this.onInputChange(event)} value={this.props.selectedSubsetOption.detail_data.value}></input>
                    </div>
                )
            }
        }
        return(
            <div className={classes["element-detail"]+" "+(this.props.selectedSubsetOption ? "" : classes["striped-box"])}>
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