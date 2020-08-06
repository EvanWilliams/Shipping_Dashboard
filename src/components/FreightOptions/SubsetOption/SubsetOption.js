import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/FreightDashboard/FreightDashboard';
import classes from './SubsetOption.module.scss';

class ElementDetail extends Component {
    constructor() {
        super();
        this.state = {
            
        }
        
    }
     
    render(){
        return(
            <div onClick={() => this.props.onSelectedDetailChanged(this.props.id)} id={this.props.id} className={classes["subset-detail"]+' '+(this.props.selected ? classes['selected'] : '')}>
                {this.props.type}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       onSelectedDetailChanged: (id) => dispatch(actions.selectSubsetOption(id))
    };
}
const mapStateToProps = state => {
    return{
       selectedLayoutDetail: state.selectedLayoutDetail
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ElementDetail);