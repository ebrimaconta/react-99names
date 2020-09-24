// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

import AsmaList from '../containers/asmaquran';

const RenderAsma = () => {
    return (
        <div>
            <Link to="/">
                <div className="bg-space-red">
                    <div className="circle-outer">
                        <div className="circle-inactive">
                            99 names of Allaah
                        </div>
                    </div>
                </div>
            </Link>
            <AsmaList />
        </div>
    );
}

export default RenderAsma;