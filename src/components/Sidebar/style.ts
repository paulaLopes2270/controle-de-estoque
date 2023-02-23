import styled from "styled-components";

export const SidebarElement = styled.aside`
	position: relative;
	height: 100vh;
	width: 50px;
	z-index: 1000;
`;

interface ISlideSideBar {
	isOpen: boolean;
}

export const SlideSideBar = styled.div<ISlideSideBar>`
	position: absolute;
	left: 0;
	top: 0;
	width: ${({ isOpen }) => (isOpen ? "100vw" : "100%")};
	height: 100%;
	background: white;
	box-shadow: 0 3px 3px gray;
	transition: 0.3s;
	z-index: 1;

	@media screen and (min-width: 500px) {
		width: ${({ isOpen }) => (isOpen ? "250px" : "100%")};
	}
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		overflow: hidden;
		a {
			flex: 1 1 100%;
			display: flex;
			justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
			gap: ${({ isOpen }) => (isOpen ? "15px" : "0")};
			align-items: center;
			margin: 0;
			padding: ${({ isOpen }) => (isOpen ? "5px 5px 5px 10px" : "5px")};
			border: none;
			background: transparent;
			outline: none;
			color: black;
			overflow: hidden;
			text-decoration: none;
			font-size: 18px;
			transform-origin: center;
			/* box-shadow: 0px 2px 1px 0 gray; */
			cursor: pointer;

			:hover {
				transform: scale(1.03);
			}

			span {
				width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
				overflow: hidden;
				transition: 0.3s;
				white-space: nowrap;
			}
		}
	}
`;

interface IMenuButtonContainer {
	isOpen: boolean;
}

export const MenuButtonContainer = styled.div<IMenuButtonContainer>`
	flex: 1 1 100%;
	display: flex;
	justify-content: ${({ isOpen }) => (isOpen ? "flex-end" : "center")};
	transform-origin: 100%;
	padding: 5px;
	margin-bottom: 50px;
	:hover {
		transform: scale(1.03);
	}
`;

interface ISidebarBackground {
	isOpen: boolean;
}
export const SidebarBackground = styled.div<ISidebarBackground>`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100%;
	min-height: 100vh;
	background: black;
	opacity: ${({ isOpen }) => (isOpen ? "0.3" : "0")};
	visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
	transition: 0.3s;
	z-index: 0;
`;
