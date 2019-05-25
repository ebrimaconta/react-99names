import React, {Component} from "react";
import {connect}from "react-redux";

import "../assets/css/style.css";
import "../assets/css/flip.css";
 
/* var html = '' +
'<div class="box asmaquran-box ">' +
'<div class="flip-box-inner">' +
'<div class="flip-box-front pattern-two">' +
'<h2>{{EnglishName}}</h2>' +
'<h2>{{ArabicName}}</h2>' +
'<h2>{{meaning}}</h2>' +
'</div>' +
'<div class="flip-box-back">' +
'<h2>{{EnglishName}}</h2>' +
'<h2 class="source">' +
'{{source}}' +
'</h2>' +
'</div>' +
'</div>' +
'</div>'; */

class AsmaList extends Component{
    rednerList(){
        return this.props.asmaquran.map((name,index)=>
        {
            return(
                <div key={index}  className="box asmaquran-box" >
                    <div className="flip-box-inner">
                    <div className="flip-box-front pattern-two">
                    <h2>{name.EnglishName} </h2>  
                    <h2> {name.meaning}  </h2>  
                    <h2> {name.ArabicName}  </h2>  
                </div> 
                <div className="flip-box-back padding-one">
                <h2> {name.EnglishName}  </h2>  
                <h2> {name.source}  </h2>  
                <h2> {name.meaning}  </h2>  
                </div> 
                </div> 
                </div>
                  
            )
        });
    }
    render(){
        return(
            <div className="asmaquran">
                {this.rednerList()};
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        asmaquran: state.asmaquran
    }
}
export default connect(mapStateToProps)(AsmaList);