import React, { Component } from "react";
import { connect } from "react-redux";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons"; */
import "../assets/css/style.css";


type AsmaListProps = {
  Sort99names: any[]
};

class AsmaList extends Component<AsmaListProps> {



  rednerList() {
    return this.props.Sort99names.map((name, index) => {
      return (
        <div className=" pattern-one w-lg-xs m-5 pt-10 md:w-1/3 " key={index}>
          <div className="flex flex-col items-center py-10">
            <div className="text-5xl">{name.EnglishName} </div>
            <div className="text-4xl"> {name.ArabicName} </div>
            <div className="text-3xl text-center px-10 py-10"> {name.meaning} </div>
          </div>
        </div>
      );
    });
  }


  render() {
    return (
      <>
      {/*   <div className="sort flex justify-center mt-10">
          <div className="px-4 capitalize">Sort 99 names </div>
          <div className="sort-icon">
            <FontAwesomeIcon onClick={this.props.SortFunc} icon={faSort} />
          </div>
        </div> */}
        <div className="flex  flex-wrap justify-center  my-10">
          {this.rednerList()};
        </div>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    Sort99names: state.Sort99names,
  };
}

function mapDispatchToProps(dispatch: any) {
  let payload = "asc";
  return {
    SortFunc: function () {
      if (payload === "asc") {
        payload = "desc";
        dispatch({ type: "Sort", payload });
      } else if (payload === "desc") {
        payload = "asc";
        dispatch({ type: "Sort", payload });
      }
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AsmaList);
