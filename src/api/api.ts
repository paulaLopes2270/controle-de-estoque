import axios from "axios";

export const api = axios.create({
	baseURL: "https://63f67c629daf59d1ad89cd28.mockapi.io/stock",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});
