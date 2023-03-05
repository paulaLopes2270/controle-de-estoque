import styled from "styled-components";

interface ITimeOutPopUpElement {
	isOpen: boolean;
}
export const TimeOutPopUpElement = styled.div<ITimeOutPopUpElement>`
	position: fixed;
	bottom: 0px;
	right: 0;
	margin: 20px;
	padding: 20px;
	background: #00cba8;
	z-index: 1000;
	color: white;
	border-radius: 5px;
	transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(150%)")};
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	transition: 0.3s;
`;

export const TimeOutPopUpCloseButton = styled.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 5px;
	right: 5px;
	margin: 0;
	padding: 0;
	width: 15px;
	height: 15px;
	border: none;
	outline: none;
	background: transparent;
	transform-origin: center;
	cursor: pointer;

	::before,
	::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		background: white;
	}

	::before {
		transform: rotate(45deg);
	}
	::after {
		transform: rotate(-45deg);
	}

	:hover {
		transform: scale(1.1);
	}
`;
