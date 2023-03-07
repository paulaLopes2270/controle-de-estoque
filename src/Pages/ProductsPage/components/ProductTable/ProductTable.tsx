import { useEffect, useState } from "react";
import {
	ActionButton,
	IStatusColors,
	StatusIcon,
	Table,
	TableContainer,
	Td,
	Th,
	Tr,
} from "./style";
import { RiEdit2Fill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { UseProducts } from "../../../../hooks";
import { ConfirmDeleteModal, ProductFormModal } from "./components";
import { IProduct } from "../../../../types/IProdutct";
import { IActionType } from "./interface";

export const ProductTable = () => {
	const { products, updateProducts } = UseProducts();
	const [confirmDeleteModalIsOpen, setConfirmDeleteModalIsOpen] =
		useState(false);
	const [productFormModalIsOpen, setProductFormModalIsOpen] = useState(true);
	const [targetProduct, setTargetProduct] = useState<null | IProduct>(null);
	const [actionType, setActionType] = useState<IActionType>("new");

	const clearTargetProduct = () => setTargetProduct(null);

	const createProductHandleClick = () => {
		setProductFormModalIsOpen(true);
		setActionType("new");
	};

	useEffect(() => {
		updateProducts();
	}, []);

	return (
		<>
			<button onClick={createProductHandleClick}>Adicionar produto +</button>
			<TableContainer>
				<Table>
					<thead>
						<Tr>
							<Th>id</Th>
							<Th
								minWidth="200px"
								textAling="start">
								Nome
							</Th>
							<Th>Categoria</Th>
							<Th>Quantidade</Th>
							<Th>Maximo</Th>
							<Th>Minimo</Th>
							<Th>Vence em 30 dias</Th>
							<Th>Status</Th>
							<Th>Ações</Th>
						</Tr>
					</thead>
					<tbody>
						{products.map((currentProduct) => {
							const { amount, category, id, maxAmount, minAmount, name } =
								currentProduct;
							const getQuantityStatus = (
								amount: number,
								maxAmount: number,
								minAmout: number
							): IStatusColors => {
								if (amount < minAmout) {
									return "belowMin";
								} else if (amount > maxAmount) {
									return "aboveMax";
								} else {
									return "betweenMinAndMax";
								}
							};

							const deleteProductHandleClick = () => {
								setTargetProduct(currentProduct);
								setConfirmDeleteModalIsOpen(true);
							};
							const editProdutcHandleClick = () => {
								setTargetProduct(currentProduct);
								setProductFormModalIsOpen(true);
								setActionType("edit");
							};

							const viewProductHandleClick = () => {
								setTargetProduct(currentProduct);
								setProductFormModalIsOpen(true);
								setActionType("observable");
							};
							return (
								<Tr key={id}>
									<Td>{id}</Td>
									<Td textAling="start">{name}</Td>
									<Td>{category}</Td>
									<Td>{amount}</Td>
									<Td>{maxAmount}</Td>
									<Td>{minAmount}</Td>
									<Td>Sim</Td>
									<Td>
										<StatusIcon
											status={getQuantityStatus(amount, maxAmount, minAmount)}
										/>
									</Td>
									<Td>
										<ActionButton onClick={viewProductHandleClick}>
											<IoEyeSharp />
										</ActionButton>
										<ActionButton onClick={editProdutcHandleClick}>
											<RiEdit2Fill />
										</ActionButton>
										<ActionButton onClick={deleteProductHandleClick}>
											<RiDeleteBin5Fill />
										</ActionButton>
									</Td>
								</Tr>
							);
						})}
					</tbody>
				</Table>
				<ConfirmDeleteModal
					useModal={[confirmDeleteModalIsOpen, setConfirmDeleteModalIsOpen]}
					deleteProductTarget={targetProduct}
					clearTargetProduct={clearTargetProduct}
				/>
				<ProductFormModal
					useModal={[productFormModalIsOpen, setProductFormModalIsOpen]}
					actionType={actionType}
					useTargetProduct={[targetProduct, setTargetProduct]}
				/>
			</TableContainer>
		</>
	);
};
