import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/actions/FreightDashboard/FreightDashboard';
import classes from './Detail-Input.module.scss';

class DetailInput extends Component {
    constructor() {
        super();
        this.state = {
        
        }
        this.onInputChange = (event) => {
            let updatedSelectedSubsetOption = {...this.props.selectedSubsetOption}
            updatedSelectedSubsetOption.detail_data.value = event.target.value;
            this.props.onSelectedSubsetOptionChanged(updatedSelectedSubsetOption,updatedSelectedSubsetOption.id);
        }
    }

    render(){
        return(
            <div className={classes["selected-subset-options--input"]}>
                <div>Input Searches all shipments {this.props.type}s (Case sensitive)</div>
                <div>
                    <span className={classes["caption"]}>{this.props.type}</span>
                    <input type="input" onChange={(event) => this.onInputChange(event)} value={this.props.value}></input>
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(DetailInput);