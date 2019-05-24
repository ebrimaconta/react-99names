import React, {Component} from "react";
import {connect}from "react-redux";

class AsmaList extends Component{
    rednerList(){
        return this.props.names.map((name,index)=>
        {
            return(
                <li key={index} >{name.EnglishName} {name.ArabicName}  {name.meaning}</li>
                 
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
export default connect(mapStateToProps)(AsmaList);