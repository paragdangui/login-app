import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
	return (
		<React.Fragment>
			<div
				className={`${classes.control} ${props.isValid === false ? classes.invalid : ""
					}`}
			>
				<label htmlFor={props.id}>{props.label}</label>
				<input
					id={props.id}
					type={props.type}
					value={props.value}
					onChange={props.onChange}
					onBlur={props.onBlur}
				/>
			</div>
		</React.Fragment >
	);
};

export default Input;
