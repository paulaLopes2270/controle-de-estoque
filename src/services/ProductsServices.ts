import { api } from "../api";
import { IProduct } from "../types/IProdutct";
import { AxiosResponse, AxiosError, isAxiosError } from "axios";

export const getProducts = async () => {
	try {
		const response: AxiosResponse<IProduct[]> = await api.get<IProduct[]>(
			"/products"
		);
		console.log("getProducts response", response);
		return response;
	} catch (error) {
		if (isAxiosError(error)) {
			const axiosError: AxiosError = error;
			return axiosError;
		} else {
			console.log(error);
		}
	}
};

export const getProductByid = async (id: string) => {
	try {
		const response: AxiosResponse<IProduct> = await api.get(`/products/:${id}`);
		console.log("getProductByid response", response);
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
		console.log("putProduct response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};

export const postProduct = async (newProduct: IProduct) => {
	try {
		const response: AxiosResponse = await api.post(`/products`, newProduct);
		console.log("postProduct response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};

export const deleteProduct = async (productId: string) => {
	try {
		const response: AxiosResponse = await api.delete(`/products/${productId}`);
		console.log("deleteProduct response", response);
		return response;
	} catch (err) {
		console.log("err", err);
		return err;
	}
};
