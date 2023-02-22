import { useState } from "react";
import {
	MenuButtonContainer,
	NavMenuButton,
	SidebarElement,
	SlideSideBar,
} from "./style";
import { MdAddBusiness } from "react-icons/md";
import { MenuButton } from "./components";

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const iconSize = 30;
	return (
		<SidebarElement>
			<SlideSideBar isOpen={isOpen}>
				<nav>
					<MenuButtonContainer>
						<MenuButton useButton={[isOpen, setIsOpen]} />
					</MenuButtonContainer>
					<NavMenuButton>
						<MdAddBusiness size={iconSize} />
					</NavMenuButton>
				</nav>
			</SlideSideBar>
		</SidebarElement>
	);
};
