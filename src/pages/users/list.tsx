import { useTable } from "@refinedev/antd";
import React from "react";
import { IUser } from "../../interfaces";

export const UserList: React.FC = () => {
	const { tableProps } = useTable<IUser>({syncWithLocation: true})
	console.log(tableProps)
	return <div>UserList</div>;
}