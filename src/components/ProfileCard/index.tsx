import React, { useState } from "react";
import { IUser } from "../../interfaces";
import { DicebarAPI_URL } from "../../utils";
import "./index.css"
import { DeleteButton, EditButton } from "@refinedev/antd";
import { GlobalOutlined, HeartFilled, HeartOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { UserEdit } from "../../pages/users";

interface PropTypes {
	user: IUser
}

export const ProfileCard: React.FC<PropTypes> = ({ user }) => {
	const [liked, setLiked] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const onLikeButtonClick = () => {
		setLiked(!liked);
	}

	const onEditButtonClick = () => {
		setIsModalOpen(true)
	}

	return (
		<React.Fragment>
			{isModalOpen && <UserEdit isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} user={user}/>}
			<div className="profileCardContainer">
				<img 
					src={DicebarAPI_URL + user.username} 
					alt={user.username + "avatar"}
					className="profileCardImage"
				/>
				<div className="profileInfoContainer">
					<p className="profileName">{user.name}</p>
					<div><MailOutlined /> {user.email}</div>
					<div><PhoneOutlined /> {user.phone}</div>
					<div><GlobalOutlined /> {user.website}</div>
				</div>
				<div className="actionButtonsContainer">
					{!liked ? <HeartOutlined 
						className="actionButtons"
						onClick={onLikeButtonClick}/> 
						: <HeartFilled 
							className="actionButtons liked"
							onClick={onLikeButtonClick}
						/>}
					<EditButton hideText size="small" className="actionButtons" onClick={onEditButtonClick}/>
					<DeleteButton hideText size="small" recordItemId={user.id} className="actionButtons"/>
				</div>
			</div>
		</React.Fragment>
	);
}