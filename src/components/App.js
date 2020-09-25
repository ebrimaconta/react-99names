import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../assets/css/style.css";
import "./../../node_modules/animate.css/animate.min.css";
import "../dist/style.css";

import RenderNames from "../components/RednerNames";
import RenderAsma from "../components/RednerAsma";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-139972905-1');

class Main extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={RenderNames} exact />
          <Route path="/asmaquran" component={RenderAsma} exact />
        </BrowserRouter>
        <div>
      </div>
    );
  }
}

export default Main;
