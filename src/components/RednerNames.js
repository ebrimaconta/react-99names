// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";
  

import NamesList from '../containers/99names';




const RenderNames = () =>{
    return(
    <div>
        <Link to="/asmaquran">
    <div className="circle-box">
                    <div className="circle-outer">
                        <div className="circle-inactive">
                         Asma Quran (Names of the  Quran)
                        </div>
                    </div>
                </div>
                </Link>
               
                <NamesList />
    </div>
    );
}
 
export  default RenderNames;