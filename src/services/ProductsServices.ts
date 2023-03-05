import { api } from "../api";
import { IProduct } from "../types/IProdutct";
import { AxiosResponse, AxiosError } from "axios";

interface IError {
	error: any;
}

export const getProducts = async (): Promise<
	AxiosResponse<IProduct[] | IError>
> => {
	try {
		const response: AxiosResponse<IProduct[]> = await api.get("/products");
		console.log("response", response);
		return response;
	} catch (err: AxiosError<IProduct[]>) {
		console.log("err", err);
		return err;
	}
};

export const getProductByid = async (
	id: string
): Promise<AxiosResponse<IProduct>> => {
	try {
		const response: AxiosResponse<IProduct> = await api.get(`/products/:${id}`);
		console.log("response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};

export const putProduct = async (updatedProduct: IProduct) => {
	try {
		const response: AxiosResponse = await api.put(
			`/products/:${updatedProduct.id}`,
			updatedProduct
		);
		console.log("response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};

export const postProduct = async (newProduct: IProduct) => {
	try {
		const response: AxiosResponse = await api.post(`/products`, newProduct);
		console.log("response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};

export const deleteProduct = async (productId: string) => {
	try {
		const response: AxiosResponse = await api.delete(`/products/${productId}`);
		console.log("response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};
