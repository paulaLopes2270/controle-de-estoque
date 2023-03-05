import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useState,
	FC,
	ReactNode,
} from "react";
import { IProduct } from "../../types/IProdutct";

interface IGlobal {
	productsState: [IProduct[], Dispatch<SetStateAction<IProduct[]>>];
}

export const GlobalContext = createContext<IGlobal>({
	productsState: [[], () => {}],
});

interface IGlobalContextProvider {
	children: ReactNode;
}

export const GlobalContextProvider: FC<IGlobalContextProvider> = ({
	children,
}) => {
	const [products, setProducts] = useState<IProduct[]>([]);
	return (
		<GlobalContext.Provider
			value={{
				productsState: [products, setProducts],
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
