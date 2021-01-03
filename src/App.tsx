import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/scss/style.scss';
import '../node_modules/animate.css/animate.min.css';
import './assets/dist/tailwind.css';

import RenderNames from './domain/Main';
import RenderAsma from './domain/AsmaQuran/AsmaQuran';
import Slider from './domain/Slider/Sliders';
import NotFound from './domain/NotFound/NotFound';
import '../node_modules/react-slideshow-image/dist/styles.css';
class Main extends Component {
  render() {
    return (
      <div className='App '>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={RenderNames} exact />
            <Route path='/asmaquran' component={RenderAsma} exact />
            <Route path='/slider' component={Slider} exact />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
