import styled from "styled-components";

interface IMenuButtonElement {
	isOpen: boolean;
}

export const MenuButtonElement = styled.button<IMenuButtonElement>`
	display: flex;
	justify-content: center;
	align-items: center;
  padding: 0;
	border: none;
	background: transparent;
	outline: none;
	cursor: pointer;
	width: 30px;
	height: 30px;

	span {
		display: flex;
		position: relative;
		width: 100%;
		height: 4px;
		background: black;
		border-radius: 5px;
		transform: ${({ isOpen }) => isOpen && "rotate(45deg)"};
		transition: 0.3s;

		::before,
		::after {
			position: absolute;
			content: "";
			width: 100%;
			height: 100%;
			background: black;
			border-radius: 5px;
			transform: ${({ isOpen }) => isOpen && "rotate(-90deg)"};
			transition: 0.3s;
		}

		::before {
			top: ${({ isOpen }) => (isOpen ? "0" : "-7px")};
		}

		::after {
			top: ${({ isOpen }) => (isOpen ? "0" : "7px")};
		}
	}
`;
