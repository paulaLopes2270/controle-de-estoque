import styled from "styled-components";

export const SidebarElement = styled.aside`
	height: 100vh;
	width: 50px;
	z-index: 1000;
`;

interface ISlideSideBar {
	isOpen: boolean;
}

export const SlideSideBar = styled.div<ISlideSideBar>`
	width: ${({ isOpen }) => (isOpen ? "100vw" : "100%")};
	height: 100%;
	background: white;
	box-shadow: 0 3px 3px gray;
	transition: 0.3s;

	@media screen and (min-width: 500px) {
		width: ${({ isOpen }) => (isOpen ? "300px" : "100%")};
	}
	nav {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
    overflow: hidden;
	}
`;

export const MenuButtonContainer = styled.div`
	flex: 1 1 100%;
	display: flex;
	justify-content: flex-end;
	transform-origin: 100%;
	padding: 5px;
	:hover {
		transform: scale(1.03);
	}
`;

export const NavMenuButton = styled.button`
	flex: 1 1 100%;
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin: 0;
	padding: 5px;
	border: none;
	background: transparent;
	outline: none;
	/* box-shadow: 0px 2px 1px 0 gray; */
	cursor: pointer;
`;
