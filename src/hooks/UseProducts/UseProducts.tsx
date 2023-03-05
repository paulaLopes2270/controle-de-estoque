import { useContext } from "react";
import { GlobalContext } from "../../context";
import {
	deleteProduct,
	getProductByid,
	getProducts,
	postProduct,
	putProduct,
} from "../../services/ProductsServices";
import { IProduct } from "../../types/IProdutct";

export const UseProducts = () => {
	const { productsState } = useContext(GlobalContext);
	const [products, setProducts] = productsState;

	const updateProducts = async () => {
		const productsResponse = await getProducts();
		const { status, data } = productsResponse;
		if (status === 200) {
			setProducts(data);
		}
	};

	const productById = async (id: string) => {
		const productResponse = await getProductByid(id);
		const { status, data } = productResponse;

		if (status === 200) {
			return data;
		}
	};

	const updateProductById = async (updatedProduct: IProduct) => {
		const updateProductResponse = await putProduct(updatedProduct);
		const { status, data } = updateProductResponse;

		if (status === 200) {
			updateProducts();
			return data;
		}
	};

	const addNewProduct = async (newProduct: IProduct) => {
		const newProductResponse = await postProduct(newProduct);
		const { status, data } = newProductResponse;

		if (status === 200) {
			updateProducts();
			return data;
		}
	};

	const removeProduct = async (removeProductId: string) => {
		const newProductResponse = await deleteProduct(removeProductId);
		const { status, data } = newProductResponse;

		if (status === 200) {
			updateProducts();
			return data;
		}
	};

	return {
		products,
		updateProducts,
		productById,
		updateProductById,
		addNewProduct,
		removeProduct,
	};
};
