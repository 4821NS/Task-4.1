import React from "react";
import './ExtraText.css';

function ExtraText(props){
    return(
        <>
        <div className="Extra_Text">
            <button className="heading_Text">{props.text}</button>
        </div>

        </>
    )
}
export default ExtraText;