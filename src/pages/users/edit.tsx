import { Edit, useForm } from "@refinedev/antd";
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
	const { formProps, saveButtonProps, queryResult, formLoading } = useForm({
		
	});

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	// const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
	// 	console.log('Success:', values);
	// };
	// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
	// 	console.log('Failed:', errorInfo);
	// };

	return (
		<Modal title="Basic Modal" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
			<Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
				<Form
					name="basic"
					{...formProps}
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ remember: true }}
				>
					<Form.Item<FieldType>
						label="Name"
						name="name"
						rules={[{ required: true, message: 'Please input your name!' }]}
						initialValue={user.name}
					>
						<Input/>
					</Form.Item>
					<Form.Item<FieldType>
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Please input your email!' }]}
						initialValue={user.email}
					>
						<Input />
					</Form.Item>
					<Form.Item<FieldType>
						label="Phone No."
						name="phone"
						rules={[{ required: true, message: 'Please input your Phone no.!' }]}
						initialValue={user.phone}
					>
						<Input />
					</Form.Item>
					<Form.Item<FieldType>
						label="Website"
						name="website"
						rules={[{ required: true, message: 'Please input your Website!' }]}
						initialValue={user.website}
					>
						<Input />
					</Form.Item>
				</Form>
			</Edit>
		</Modal>
	);
}