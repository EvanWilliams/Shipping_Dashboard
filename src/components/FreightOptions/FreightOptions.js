import React,{ Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './FreightOptions.scss';
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
            <header id="masthead" className="site-header">

                <div id="navbar" className="navbar">
                    <nav id="site-navigation" className="navigation main-navigation" role="navigation">
                        <div className="menu-container">
                            <ul id="primary-menu" className={`nav-menu ${this.state.toggleClass ? "active" : "inactive"}`}>
                                <li onClick={(event) => this.handleClick(event)} id="menu-item-31" className={`${this.state.toggleClass ? "active" : "inactive"}`}><a>{caret}</a></li>
                                <li><NavLink exact activeClassName="selectedLink" to="/">NAV 1</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" to="/">NAV 2</NavLink></li>
                                <li><NavLink activeClassName="selectedLink" to="/">NAV 3</NavLink></li>
                            </ul>
                        </div> 
                    </nav>
                </div>
                <div className={`pop-out-pane ${this.state.toggleClass ? "active" : "inactive"}`}>
                    <div className="box-wrapper">
                        <div className="draggable-menu">
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
            </header>
        );
    }
}

const mapStateToProps = state => {
    return{
        subsetOptions: state.subsetOptions,
    };
}
export default connect(mapStateToProps)(FreightOptions);