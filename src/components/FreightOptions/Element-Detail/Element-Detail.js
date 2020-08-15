import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/FreightDashboard/FreightDashboard';
import classes from './Element-Detail.module.scss';
import DetailInput from './Element-Detail-Types/Detail-Input/Detail-Input';
import DetailCheckbox from './Element-Detail-Types/Detail-Checkbox/Detail-Checkbox';

class ElementDetail extends Component {
    constructor() {
        super();
        this.state = {
        
        }
    }
     
    render(){

        let renderedOptions = null;
        if( this.props.selectedSubsetOption ) {
            if(this.props.selectedSubsetOption.detail_data.type==='checkbox'){
                renderedOptions = (
                    <DetailCheckbox
                        type={this.props.selectedSubsetOption.type}
                        options={this.props.selectedSubsetOption.detail_data.options}
                    
                    ></DetailCheckbox>
                )
            }
            if(this.props.selectedSubsetOption.detail_data.type==='input'){
                renderedOptions = (
                    <DetailInput
                        type={this.props.selectedSubsetOption.type}
                        value={this.props.selectedSubsetOption.detail_data.value}
                    >
                    </DetailInput>
                )
            }
        }
        return(
            <div className={classes["element-detail"]+" "+(this.props.selectedSubsetOption ? "" : classes["striped-box"])}>
                {this.props.selectedSubsetOption ? <div className={classes["element-detail--heading"]}>Selected Subsection Options</div>: null}
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