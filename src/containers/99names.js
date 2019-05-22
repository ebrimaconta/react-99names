import React, {Component} from "react";
import {connect}from "react-redux";

class namesList extends Component{
    rednerList(){
        return this.props.books.map((book)=>
        {
            return(
                <li key={book.title} >{book.title}</li>
            )
        });
    }
    reder(){
        return(
            <ul>
                {this.rednerList()};
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books;
    }
}
export default connect(mapStateToProps)(namesList);