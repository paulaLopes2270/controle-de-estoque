import axios from "axios";
import { useEffect } from "react";

export const instance = axios.create({
	baseURL: "https://63f67c629daf59d1ad89cd28.mockapi.io/stock",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

export const getProducts = async () => {
	try {
		const response = await instance.get("/products");

		useEffect(() => {
			console.log(response);
		});
		return response;
	} catch (err) {
		console.log("error!");
		console.log(err);
	}
};

