import { Dispatch, FC, SetStateAction } from "react";
import { MenuButtonElement } from "./style";

interface IMenuButton {
	useButton: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const MenuButton: FC<IMenuButton> = ({ useButton }) => {
	const [isOpen, setIsOpen] = useButton;

	return (
		<MenuButtonElement
			isOpen={isOpen}
			onClick={() => setIsOpen((isOpen) => !isOpen)}>
			<span />
		</MenuButtonElement>
	);
};
