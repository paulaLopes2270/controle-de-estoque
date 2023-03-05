import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const RotateContainer = styled.div`
	animation: ${rotate} 2s linear infinite;
	transform-origin: center;
	padding: 5px;
`;

interface IModalElement {
	modalIsOpen: boolean;
}
export const ModalElement = styled.div<IModalElement>`
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-width: 100vw;
	height: 100%;
	min-height: 100vh;
	visibility: ${({ modalIsOpen }) => (modalIsOpen ? "visible" : "hidden")};
	opacity: ${({ modalIsOpen }) => (modalIsOpen ? "1" : "0")};
	transition: 0.3s;
	z-index: 1100;
`;
export const ModalBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
`;

interface IModalCard {
	modalIsOpen: boolean;
}
export const ModalCard = styled.div<IModalCard>`
	position: absolute;
	padding: 15px;
	background: white;
	transform: ${({ modalIsOpen }) =>
		modalIsOpen ? "translateY()" : "translateY(-100%)"};
	transition: 0.3s;
`;
export const ModalCardCloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	border: none;
	margin: 0;
	padding: 0;
	background: transparent;
	outline: none;
	cursor: pointer;
	transform-origin: center center;

	:hover {
		transform: scale(1.03);
	}
`;
