import React, { Component } from "react";
import { BrowserRouter, Route ,Switch } from "react-router-dom";

import "../assets/css/style.css";
import "./../../node_modules/animate.css/animate.min.css";
import "../dist/style.css";

import RenderNames from "./RednerNames";
import RenderAsma from "./RednerAsma";
import NotFound from "./NotFound";


class Main extends Component {
  render() {
    return (
      <div className="App ">
        <BrowserRouter>
        <Switch>
          <Route path="/" component={RenderNames} exact />
          <Route path="/asmaquran" component={RenderAsma} exact />
          <Route path="/asmaquran" component={RenderAsma} exact />
          <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        </div>
          )
} 
}

export default Main;
