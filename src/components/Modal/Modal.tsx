import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { GrFormClose } from "react-icons/gr";
import {
	ModalElement,
	ModalBackground,
	ModalCard,
	ModalCardCloseButton,
	RotateContainer,
} from "./style";
import { VscLoading } from "react-icons/vsc";

interface IModal {
	children?: ReactNode;
	useModal: [boolean, Dispatch<SetStateAction<boolean>>];
	isLoading?: boolean;
}

export const Modal: FC<IModal> = ({ children, useModal, isLoading }) => {
	const [modalIsOpen, setModalIsOpen] = useModal;

	return (
		<ModalElement modalIsOpen={modalIsOpen}>
			<ModalBackground onClick={() => setModalIsOpen(false)} />
			{isLoading ? (
				<RotateContainer>
					<VscLoading
						size={70}
						style={{ color: "white" }}
					/>
				</RotateContainer>
			) : (
				<ModalCard modalIsOpen={modalIsOpen}>
					<ModalCardCloseButton onClick={() => setModalIsOpen(false)}>
						<GrFormClose size={20} />
					</ModalCardCloseButton>
					{children}
				</ModalCard>
			)}
		</ModalElement>
	);
};
