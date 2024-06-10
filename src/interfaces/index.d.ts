export interface IUser {
	id: number;
	username: string;
	name: string;
	email: string;
	phone: string;
	website: string;
	address: IAddress;
}

export interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

export interface ICompany {
	name: string;
}