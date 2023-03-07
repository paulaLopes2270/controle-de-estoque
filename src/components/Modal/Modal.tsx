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
	closeModalHandleClick?: () => void;
}

export const Modal: FC<IModal> = ({
	children,
	useModal,
	isLoading,
	closeModalHandleClick,
}) => {
	const [modalIsOpen, setModalIsOpen] = useModal;

	const closemodal = () => {
		setModalIsOpen(false);
		closeModalHandleClick && closeModalHandleClick();
	};

	return (
		<ModalElement modalIsOpen={modalIsOpen}>
			<ModalBackground onClick={closemodal} />
			{isLoading ? (
				<RotateContainer>
					<VscLoading
						size={70}
						style={{ color: "white" }}
					/>
				</RotateContainer>
			) : (
				<ModalCard modalIsOpen={modalIsOpen}>
					<ModalCardCloseButton onClick={closemodal}>
						<GrFormClose size={20} />
					</ModalCardCloseButton>
					{children}
				</ModalCard>
			)}
		</ModalElement>
	);
};
