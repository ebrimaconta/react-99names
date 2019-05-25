import React, {Component} from "react";
import {connect}from "react-redux";

import "../assets/css/style.css";
 
class AsmaList extends Component{
    rednerList(){
        return this.props.names.map((name,index)=>
        {
            return(
                <div className="box pattern-one namesofAllaah-box" key={index} >
                    <div className="pattern-flow"></div>
                <div className="container-names">
                <div className="name-two">{name.EnglishName} </div> 
                <div className="name-one"> {name.ArabicName}   </div>
                <div className="name-three"> {name.meaning} </div>
                </div> 
                <div className="pattern-flow"></div>
                </div>
                 
            )
        });
    }
    render(){
        return(
            <div>
                {this.rednerList()};
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        names: state.names
    }
}
export default connect(mapStateToProps)(AsmaList);