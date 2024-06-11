import React from "react";
import { IUser } from "../../interfaces";
import { DicebarAPI_URL } from "../../utils";
import "./index.css"

interface PropTypes {
	user: IUser
}

export const ProfileCard: React.FC<PropTypes> = ({ user }) => {
	return (
		<div className="profileCardContainer">
			<img 
				src={DicebarAPI_URL + user.username} 
				alt={user.username + "avatar"}
				className="profileCardImage"
			/>
			<div className="profileInfoContainer">
				<p className="profileName">{user.name}</p>
				<p>{user.email}</p>
				<p>{user.phone}</p>
				<p>{user.website}</p>
			</div>
		</div>
	);
}