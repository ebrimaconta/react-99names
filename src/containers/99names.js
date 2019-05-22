import React, {Component} from "react";
 
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

export default namesList;