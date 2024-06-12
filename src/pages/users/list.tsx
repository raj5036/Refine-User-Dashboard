import { useTable } from "@refinedev/antd";
import React from "react";
import { IUser } from "../../interfaces";
import { Row, Col } from "antd";
import { LoadingIndicator, ProfileCard } from "../../components";

export const UserList: React.FC = () => {
	const { tableProps } = useTable<IUser>({syncWithLocation: true})
	
	return (
		<React.Fragment>
			{tableProps.loading ? 
				<LoadingIndicator /> : (
					<div style={{overflowX: "hidden"}}>
						<Row gutter={[16, { xs: 16, sm: 16, md: 24, lg: 24 }]}>
							{tableProps?.dataSource?.map((user) => (
								<Col key={user.id} xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
									<ProfileCard user={user}/>
								</Col>
							))}
						</Row>	
					</div>
				)}
		</React.Fragment>
	)
	
}