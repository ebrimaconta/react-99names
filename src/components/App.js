import React, {Component} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";

import '../assets/css/style.css';
import asmaquran from '../containers/asmaquran';
import NamesList from '../containers/99names';;




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
        <Link to="pdf/99names_new.pdf">
          99 names of Allaah pdf
          </Link>
            <BrowserRouter>
            <Link to="/asmaquran">
                <div className="circle-box">
                    <div className="circle-outer">
                        <div className="circle-inactive">
                            
                          Asma Ul Quran
                        </div>
                    </div>
                </div>
                </Link>
                <Route path="/asmaquran" component={asmaquran} exact/>

         </BrowserRouter>
            <NamesList />
        </div >
    );
}
}

export default Main;