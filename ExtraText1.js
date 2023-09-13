import React from "react";
import './ExtraText1.css';

function ExtraText1(props){
    return(
        <>
            <div className="Extra_Text1">
            <h1 className="heading_Text1">{props.text1}</h1>

            </div>
        </>
    )
}
export default ExtraText1;