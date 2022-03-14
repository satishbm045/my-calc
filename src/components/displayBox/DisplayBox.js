import React from "react";
import './displayBox.css';

const DisplayBox = (props) => {
	return (
		<div className="valueDisplay">
			<input className="inputDiv" disabled value={props.enteredValue} placeholder={"Enter digits"}/>
		</div>
	)
}

export default DisplayBox;