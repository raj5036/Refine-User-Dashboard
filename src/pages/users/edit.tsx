import { Modal } from "antd";
import React from "react";

interface PropTypes {
	isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const UserEdit: React.FC<PropTypes> = ({ isModalOpen, setIsModalOpen }) => {

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
			UserEdit
		</Modal>
	);
}