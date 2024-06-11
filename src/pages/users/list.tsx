import { useTable } from "@refinedev/antd";
import React from "react";
import { IUser } from "../../interfaces";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";

export const UserList: React.FC = () => {
	const { tableProps } = useTable<IUser>({syncWithLocation: true})
	console.log(tableProps)
	return (
		<React.Fragment>
			{tableProps.loading ? 
				<LoadingIndicator/> : (
					'UserList'
				)}
		</React.Fragment>
	)
	
}