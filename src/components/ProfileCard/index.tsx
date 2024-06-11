import React from "react";
// import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { IUser } from "../../interfaces";
import { DicebarAPI_URL } from "../../utils";

import "./index.css"
import { ShowButton, DeleteButton, EditButton } from "@refinedev/antd";
import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

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
				<div>
					<MailOutlined />
					{user.email}
				</div>
				<div>
					<PhoneOutlined />
					{user.phone}
				</div>
				<div>
					<GlobalOutlined />
					{user.website}
				</div>
			</div>
		</div>
	);
}