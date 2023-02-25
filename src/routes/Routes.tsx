import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Admin, ProductRegistration } from "../Pages";
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
							element={<Home />}
						/>
						<Route
							path="/admin"
							element={<Admin />}
						/>
						<Route
							path="/cadastro-de-produtos"
							element={<ProductRegistration />}
						/>
					</Routes>
					{footer}
				</div>
			</RoutesContainer>
		</Router>
	);
};
