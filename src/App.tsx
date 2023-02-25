import { Sidebar } from "./components";
import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<MainRoutes sideBar={<Sidebar />} />
		</div>
	);
};
