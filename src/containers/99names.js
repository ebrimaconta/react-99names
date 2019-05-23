import React, {Component} from "react";
import {connect}from "react-redux";

class NamesList extends Component{
    rednerList(){
        return this.props.names.map((name,index)=>
        {
            return(
                <li key={index} >{name.EnglishName}</li>
            )
        });
    }
    render(){
        return(
            <ul>
                {this.rednerList()};
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        names: state.names
    }
}
export default connect(mapStateToProps)(NamesList);