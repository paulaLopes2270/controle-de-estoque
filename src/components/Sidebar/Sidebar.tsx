import { Link } from "react-router-dom";
import { useState } from "react";
import {
	MenuButtonContainer,
	SidebarBackground,
	SidebarElement,
	SlideSideBar,
} from "./style";
import { MdAddBusiness, MdHome } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
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
						<IoIosHome size={iconSize} />
						<span>Home</span>
					</Link>
					<Link
						to="/"
						onClick={() => setIsOpen(false)}>
						<MdAddBusiness size={iconSize} />
						<span>Cadastro de produtos</span>
					</Link>
				</nav>
			</SlideSideBar>
			<SidebarBackground isOpen={isOpen} onClick={() => setIsOpen(false)} />
		</SidebarElement>
	);
};
