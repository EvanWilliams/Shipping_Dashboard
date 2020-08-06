import React,{ Component} from 'react';
import classes from './FreightToggle.module.scss';
class FreightToggle extends Component {

    constructor() {
        super();
        this.state = {
            selectedMode:"Destination"
        }
        this.handleClick = (event,type) => {
            if(type==="Destination"){
                this.setState({selectedMode: "Destination"});
            }
            else if(type === "Origin"){
                this.setState({selectedMode: "Origin"});
            }
        }
    }

    render(){
        let infoString = null;
        this.state.selectedMode === "Destination" ? infoString = <div>{this.props.sourceinfo.destination}</div> : infoString = <div>{this.props.sourceinfo.origin}</div>;

        return(
            <div className={classes["freight-toggle"]}>
                <div className={classes["source-toggle"]}>
                <div onClick={(event) => {this.handleClick(event,"Origin")}} className={this.state.selectedMode === "Origin" ? classes["selected"] : ""}>O</div>
                    <div onClick={(event) => {this.handleClick(event,"Destination")}} className={this.state.selectedMode === "Destination" ? classes["selected"] : ""}>D</div>
                </div>
                <span className={classes["info-string"]}>{infoString}</span>
            </div>
        );
    }
}


export default FreightToggle;