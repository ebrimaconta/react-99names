import React, {Component} from "react";
import asmaquran from './components/asmaquran/asmaquran';
import './assets/css/style.css';
import {BrowserRouter,Route,Link} from "react-router-dom";

import namesList from "react-router-dom";
 


class Main extends Component () {
    render(){
    return ( 
        <div className = "App" >
        <header className = "App-header" >
        The website is the 99 names by our beloved shaykh ibn uthymeen may Allaah be please with him and us may Allaah azza wal jaal reward the compile of the pdf may Allaah aid ahlul sunnah
        </header>
        <br />
            <br /> Below is the pdf. May Allaah azza wal jal accept it
            <br />
        <a href="pdf/99names_new.pdf">
          99 names of Allaah pdf
          </a>
            <BrowserRouter>
            <Link to="/asmaquran">
                <div class="circle-box">
                    <div class="circle-outer">
                        <div class="circle-inactive">
                            
                          Asma Ul Quran
                        </div>
                    </div>
                </div>
                </Link>
                <Route path="/asmaquran" component={asmaquran} exact/>

         </BrowserRouter>
            <namesList />
        </div >
    );
}
}

export default Main;