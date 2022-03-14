import React from "react";
import './buttonBox.css';

const ButtonBox = (props) => {
	return (
		<div className="buttonDisplay">
			{
				props.type == "number" 
				?
					<button className="button" onClick={()=>props.numberClick(props.buttonValue)}>{props.buttonValue}</button>
				:
					<button className="button" onClick={()=>props.operationClick(props.buttonValue)}>{props.buttonValue.symbol}</button>
			}
		</div>
	)
}

export default ButtonBox;