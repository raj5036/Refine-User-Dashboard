import { Form, Input, Modal } from "antd";
import React from "react";
import { IUser } from "../../interfaces";
import { FormProps } from "antd/lib";

interface PropTypes {
	isModalOpen: boolean
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	user: IUser
}

interface FieldType {
	name: string
	email: string
	phone: string
	website: string
}

export const UserEdit: React.FC<PropTypes> = ({ isModalOpen, setIsModalOpen, user }) => {

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Modal title="Basic Modal" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item<FieldType>
					label="Name"
					name="name"
					rules={[{ required: true, message: 'Please input your name!' }]}
					initialValue={user.name}
				>
					<Input value={user.name}/>
				</Form.Item>
				<Form.Item<FieldType>
					label="Email"
					name="email"
					rules={[{ required: true, message: 'Please input your email!' }]}
					initialValue={user.email}
				>
					<Input value={user.email}/>
				</Form.Item>
				<Form.Item<FieldType>
					label="Phone No."
					name="phone"
					rules={[{ required: true, message: 'Please input your Phone no.!' }]}
					initialValue={user.phone}
				>
					<Input value={user.phone}/>
				</Form.Item>
				<Form.Item<FieldType>
					label="Website"
					name="website"
					rules={[{ required: true, message: 'Please input your Website!' }]}
					initialValue={user.website}
				>
					<Input value={user.website}/>
				</Form.Item>

			</Form>

		</Modal>
	);
}