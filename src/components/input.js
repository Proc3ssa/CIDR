import React, { useState} from "react";

const Inputs = () => {

    return <div className="general">
        <h1>C.I.D.R. Blocks Calculator</h1>
        <div className="inputs">
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>
            <input type="number"/>
            <span>/</span>
            <input type="number"/>
        </div>

        <div className="button"><button>Calculate</button></div>

    </div>
}
export default Inputs