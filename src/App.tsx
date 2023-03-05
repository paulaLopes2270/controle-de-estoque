import React from "react";
import { Sidebar } from "./components";
import { GlobalContextProvider } from "./context";
import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
	return (
		<div className="App">
			<GlobalContextProvider>
				<GlobalStyle />
				<MainRoutes sideBar={<Sidebar />} />
			</GlobalContextProvider>
		</div>
	);
};
