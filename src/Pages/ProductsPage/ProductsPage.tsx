import React from "react";
import { CentralizerContainer } from "../../styledComponents";
import { ProductTable } from "./components";

export const ProductsPage = () => {
	return (
		<CentralizerContainer>
			<h1>Relação de produtos</h1>
			<ProductTable />
		</CentralizerContainer>
	);
};
