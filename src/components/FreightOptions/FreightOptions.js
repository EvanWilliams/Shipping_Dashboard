import React,{ Component} from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import classes from './FreightOptions.module.scss';
import ElementDetail from './Element-Detail/Element-Detail';
import SubsetOption from './SubsetOption/SubsetOption';
class FreightOptions extends Component {

    constructor() {
        super();
        this.state = {
            toggleClass: false,
        }
        this.handleClick = (event) => {
            event.preventDefault();
            this.setState({toggleClass: !this.state.toggleClass});
        }
        this.closeMenu = (event) => {
            event.preventDefault();
            if(this.state.toggleClass){
                this.setState({toggleClass: !this.state.toggleClass});
            }
        }
    }
    

    render(){
        let caret = (<FontAwesomeIcon icon={faCaretDown} />)
        if(this.state.toggleClass){
            caret = (<FontAwesomeIcon icon={faCaretUp} />)
        }
        return(
            <div>
                <div className={classes["navbar"]}>
                    <nav className={classes["main-navigation"]}>
                        <div>
                            <ul className={classes["nav-menu"] + " " + (this.state.toggleClass ? classes["active"] : classes["inactive"])}>
                                <li onClick={(event) => this.handleClick(event)} className={this.state.toggleClass ? classes["active"] : classes["inactive"]}><a>{caret}</a></li>
                            </ul>
                        </div> 
                    </nav>
                </div>
                <div className={classes["pop-out-pane"] + " " + (this.state.toggleClass ? classes["active"] : classes["inactive"])}>
                    <div className={classes["box-wrapper"]}>
                        <div className={classes["draggable-menu"]}>
                            {this.props.subsetOptions.map((element) => {
                                return(
                                    <SubsetOption
                                        key={element.id}
                                        type={element.type}
                                        id={element.id}
                                        selected={element.selected}
                                    >
                                    </SubsetOption>
                                )
                            })}
                        </div>
                        <ElementDetail></ElementDetail>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        subsetOptions: state.subsetOptions,
    };
}
export default connect(mapStateToProps)(FreightOptions);