import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsPage } from "../Pages";
import { RoutesContainer } from "./style";

type IMainRoutes = {
	footer?: JSX.Element;
	sideBar?: JSX.Element;
};

export const MainRoutes: FC<IMainRoutes> = ({ sideBar, footer }) => {
	return (
		<Router>
			<RoutesContainer>
				{sideBar}
				<div>
					<Routes>
						<Route
							path="/"
							element={<ProductsPage />}
						/>
					</Routes>
					{footer}
				</div>
			</RoutesContainer>
		</Router>
	);
};
