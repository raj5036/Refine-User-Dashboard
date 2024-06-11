import React from "react";
import { IUser } from "../../interfaces";
import { DicebarAPI_URL } from "../../utils";

interface PropTypes {
	user: IUser
}

export const ProfileCard: React.FC<PropTypes> = ({ user }) => {
	return (
		<div className="profileCardContainer">
			<img src={DicebarAPI_URL + user.username} alt={user.username + 'avatar'}/>
		</div>
	);
}