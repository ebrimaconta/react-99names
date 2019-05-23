import React, {Component} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

import '../assets/css/style.css';
import LinkToAsmaQuran from '../containers/asmaquran';
import LinkToNames from '../containers/namesNav';
import NamesList from '../containers/99names';

class Main extends Component  {
    render(){
    return ( 
        <div className = "App" >
        <header className = "App-header" >
        The website is the 99 names by our beloved shaykh ibn uthymeen may Allaah be please with him and us may Allaah azza wal jaal reward the compile of the pdf may Allaah aid ahlul sunnah
        </header>
        <br />
            <br /> Below is the pdf. May Allaah azza wal jal accept it
            <br />
    
            <BrowserRouter>
            <Link to="pdf/99names_new.pdf">
          99 names of Allaah pdf
          </Link>
          <Link to="/asmaquran"> <Route path="/" component={LinkToAsmaQuran} exact/></Link>
          <Link to="/">  <Route path="/asmaquran" component={LinkToNames} exact/></Link>
         </BrowserRouter>
            <NamesList />
        </div >
    );
}
}

export default Main;