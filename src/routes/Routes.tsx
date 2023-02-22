import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Admin } from "../Pages";

type IMainRoutes = {
	header?: JSX.Element;
	footer?: JSX.Element;
};

export const MainRoutes: FC<IMainRoutes> = ({ header, footer }) => {
	return (
		<Router>
			{header}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/admin"
					element={<Admin />}
				/>
			</Routes>
			{footer}
		</Router>
	);
};
