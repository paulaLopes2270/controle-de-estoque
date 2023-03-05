import React, { useState, Dispatch, SetStateAction } from "react";
import { Modal, TimeOutPopUp } from "../../../../../../components";
import { UseProducts } from "../../../../../../hooks";
import { IProduct } from "../../../../../../types/IProdutct";

interface IConfirmDeleteModal {
	deleteProductTarget: IProduct | null;
	useModal: [boolean, Dispatch<SetStateAction<boolean>>];
	clearTargetProduct: () => void;
}
export const ConfirmDeleteModal = ({
	deleteProductTarget,
	useModal,
	clearTargetProduct,
}: IConfirmDeleteModal) => {
	const { removeProduct } = UseProducts();
	const [, setModalIsOpen] = useModal;
	const [isLoading, setIsLoading] = useState(false);
	const [popUpIsOpen, setPopUpIsOpen] = useState(false);

	const deleteProduct = async () => {
		if (deleteProductTarget) {
			setIsLoading(true);
			await removeProduct(deleteProductTarget.id);
			setIsLoading(false);
			clearTargetProduct();
			setModalIsOpen(false);
			setPopUpIsOpen(true);
		}
	};

	return (
		<>
			<Modal
				useModal={useModal}
				isLoading={isLoading}>
				{deleteProductTarget && (
					<>
						<h3>
							Realmente deseja excluir o produto{" "}
							<strong>{deleteProductTarget.name}</strong>?
						</h3>
						<button onClick={deleteProduct}>Sim</button>
						<button onClick={() => setModalIsOpen(false)}>Não</button>
					</>
				)}
			</Modal>
			<TimeOutPopUp usePopUp={[popUpIsOpen, setPopUpIsOpen]}>
				Produto deletado com sucesso!
			</TimeOutPopUp>
		</>
	);
};
