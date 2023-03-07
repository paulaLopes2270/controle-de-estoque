export interface IProduct {
	id: string;
	createdAt: Date;
	name: string;
	price: number;
	validity: Date;
	amount: number;
	description: string;
	category: string;
	maxAmount: number;
	minAmount: number;
}

export type INewProduct = IProduct & {
	id?: string;
	createdAt?: string;
};
