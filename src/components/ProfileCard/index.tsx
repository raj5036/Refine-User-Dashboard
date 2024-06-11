import React from "react";
import { IUser } from "../../interfaces";

interface PropTypes {
	user: IUser
}

export const ProfileCard: React.FC<PropTypes> = ({ user }) => {
	return (
		<div>
			<h1>{user.name}</h1>
		</div>
	);
}