import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "../assets/css/style.css";
import "../dist/style.css";
import RenderNames from "../components/RednerNames";
import RenderAsma from "../components/RednerAsma";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="bg-space text-white  flex flex-col items-center h-40 content-center justify-center">
          <div className="title-99-names capitalize">99 Names Of Allaah</div>
          <div className="author capitalize " >Shaykh Ibn Uthymeen </div>
          <BrowserRouter>
            <Link to="./pdf/99-names-new.pdf">99 names of Allaah PDF</Link>
          </BrowserRouter>
        </header>
           
        <BrowserRouter>
          <Route path="/" component={RenderNames} exact />
          <Route path="/asmaquran" component={RenderAsma} exact />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
