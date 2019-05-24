import React, {Component} from "react";
import {connect}from "react-redux";

class AsmaList extends Component{
    rednerList(){
        return this.props.asmaquran.map((name,index)=>
        {
            return(
                <li key={index} >{name.EnglishName} {name.meaning}  {name.ArabicName}   </li>
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
        asmaquran: state.asmaquran
    }
}
export default connect(mapStateToProps)(AsmaList);