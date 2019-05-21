import React from 'react';
import './App.css';

function Main() {
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
             <a href="asmaquran.html">
                <div class="circle-box">
                    <div class="circle-outer">
                        <div class="circle-inactive">
                            Asma Ul Quran
                        </div>
                    </div>
                </div>
        </a>
        </div >
    );
}

export default Main;