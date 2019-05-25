import React, {Component} from "react";
import {connect}from "react-redux";

import "../assets/css/style.css";
 
class AsmaList extends Component{
    rednerList(){
        return this.props.names.map((name,index)=>
        {
            return(
                <div className="box pattern-one namesofAllaah-box" key={index} >
                <div className="container-names">
                <div className="name-two">{name.EnglishName} </div> 
                <div className="name-one"> {name.ArabicName}   </div>
                {name.meaning}
                </div> 
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