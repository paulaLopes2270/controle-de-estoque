import { Link } from "react-router-dom";
import { useState } from "react";
import {
	MenuButtonContainer,
	SidebarBackground,
	SidebarElement,
	SlideSideBar,
} from "./style";
import { MdAddBusiness, MdHome } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MenuButton } from "./components";

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const iconSize = 30;
	return (
		<SidebarElement>
			<SlideSideBar isOpen={isOpen}>
				<MenuButtonContainer isOpen={isOpen}>
					<MenuButton useButton={[isOpen, setIsOpen]} />
				</MenuButtonContainer>
				<nav>
					<Link
						to="/"
						onClick={() => setIsOpen(false)}>
						<MdAddBusiness size={iconSize} />
						<span>Cadastro de produtos</span>
					</Link>
					<Link
						to="/cadastro-de-produtos"
						onClick={() => setIsOpen(false)}>
						<BsFillPersonPlusFill size={iconSize} />
						<span>Fornecedores</span>
					</Link>
				</nav>
			</SlideSideBar>
			<SidebarBackground isOpen={isOpen} onClick={() => setIsOpen(false)} />
		</SidebarElement>
	);
};
