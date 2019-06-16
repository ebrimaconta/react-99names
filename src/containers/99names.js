import React, {Component} from "react";
import {connect}from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/style.css";
 
class AsmaList extends Component{
    rednerList(){
        return this.props.names.map((name,index)=>
        {
            return(
                <div className="box pattern-one namesofAllaah-box" key={index} >
                     
                <div className="container-names">
                <div className="name-two">{name.EnglishName} </div> 
                <div className="name-one"> {name.ArabicName}  </div>
                <div className="name-three"> {name.meaning} </div>
                </div>  
                </div>
                 
            )
        });
    }
    render(){
        return(
            <div className="content">
                  <FontAwesomeIcon onClick={this.props.SortFunc} icon={faCoffee} />
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

function mapDispatchToProps(dispatch){
    let payload ="asc";
    return {
        SortFunc: function() {
            if(payload === "asc"){
                payload = "desc";
                dispatch({type:"Sort",payload})
            
            } else if(payload === "desc") {
                payload = "asc";
                dispatch({type:"Sort",payload});
                
                
            }
           
           
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AsmaList);