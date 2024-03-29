import React, { useState} from "react";

const Inputs = () => {

    return <div className="general">
        <h1>C.I.D.R. Blocks Calculator</h1>
        <div className="inputs">
            <input type="number" placeholder="172"/>.
            <input type="number" placeholder="20"/>.
            <input type="number" placeholder="10"/>.
            <input type="number" placeholder="1"/>
            <span>/</span>
            <input type="number" placeholder="16"/>
        </div>

        <div className="button"><button>Calculate</button></div>

    </div>
}
export default Inputs