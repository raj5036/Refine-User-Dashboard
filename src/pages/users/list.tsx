import { useTable } from "@refinedev/antd";
import React from "react";
import { IUser } from "../../interfaces";
import { Row, Col } from "antd";
import { LoadingIndicator, ProfileCard } from "../../components";

export const UserList: React.FC = () => {
	const { tableProps } = useTable<IUser>({syncWithLocation: true})
	// console.log(tableProps)
	return (
		<React.Fragment>
			{tableProps.loading ? 
				<LoadingIndicator /> : (
					<React.Fragment>
						<Row>
							{tableProps?.dataSource?.map((item) => (
								<Col key={item.id} span={6}>
									<ProfileCard user={item}/>
								</Col>
							))}
						</Row>	
					</React.Fragment>
				)}
		</React.Fragment>
	)
	
}