import { FormEvent, Dispatch, SetStateAction, FormEventHandler } from "react";
import { Modal } from "../../../../../../components";
import { Label, ProductFormModalElement, SubmitButton } from "./style";
import { IProduct } from "../../../../../../types/IProdutct";

interface IProductFormModal {
	useModal: [boolean, Dispatch<SetStateAction<boolean>>];
	actionType: "edit" | "new" | "observable";
}

interface IForm {
	productId?: HTMLInputElement;
	createdAt?: HTMLInputElement;
	productName?: HTMLInputElement;
	price?: HTMLInputElement;
	validity?: HTMLInputElement;
	image?: HTMLInputElement;
	amount?: HTMLInputElement;
	description?: HTMLInputElement;
	category?: HTMLInputElement;
	maxAmount?: HTMLInputElement;
	minAmount?: HTMLInputElement;
}

export const ProductFormModal = ({
	useModal,
	actionType,
}: IProductFormModal) => {
	const inputsDidDisabled = actionType === "observable";
	const titleByType: Record<typeof actionType, string> = {
		edit: "Editar Produto",
		new: "Novo Produto",
		observable: "Visualizar Produto",
	};

	const onSubmitHandleClick: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		const {
			amount,
			category,
			createdAt,
			description,
			maxAmount,
			minAmount,
			price,
			productId,
			productName,
			validity,
		} = event.target as IForm;
		console.log("amount:", amount?.value);
		console.log("category:", category?.value);
		console.log("createdAt:", createdAt?.value);
		console.log("description:", description?.value);
		console.log("maxAmount:", maxAmount?.value);
		console.log("minAmount:", minAmount?.value);
		console.log("price:", price?.value);
		console.log("productId:", productId?.value);
		console.log("productName:", productName?.value);
		console.log("validity:", validity?.value);
	};

	return (
		<Modal useModal={useModal}>
			<h2>{titleByType[actionType]}</h2>
			<ProductFormModalElement onSubmit={onSubmitHandleClick}>
				{actionType !== "new" && (
					<Label size="small">
						<strong>Id:</strong>
						<input
							disabled
							value="5"
							name="productId"
						/>
					</Label>
				)}
				<Label size="large">
					<strong>Nome:</strong>
					<input
						disabled={inputsDidDisabled}
						name="productName"
					/>
				</Label>
				<Label size="medium">
					<strong>Criado em:</strong>
					<input
						disabled
						type="date"
						name="createdAt"
					/>
				</Label>
				<Label size="medium">
					<strong>Preço:</strong>
					<input
						disabled={inputsDidDisabled}
						name="price"
					/>
				</Label>
				<Label size="medium">
					<strong>Validade:</strong>
					<input
						disabled={inputsDidDisabled}
						type="date"
						name="validity"
					/>
				</Label>
				<Label>
					<strong>Categoria:</strong>
					<input
						disabled={inputsDidDisabled}
						name="category"
					/>
				</Label>
				<Label>
					<strong>Quantidade:</strong>
					<input
						disabled={inputsDidDisabled}
						name="amount"
					/>
				</Label>
				<Label>
					<strong>Quantidade maxima:</strong>
					<input
						disabled={inputsDidDisabled}
						name="maxAmount"
					/>
				</Label>
				<Label>
					<strong>Quantidade minima:</strong>
					<input
						disabled={inputsDidDisabled}
						name="minAmount"
					/>
				</Label>
				<Label size="large">
					<strong>Descrição:</strong>
					<textarea
						disabled={inputsDidDisabled}
						name="description"
					/>
				</Label>
				{actionType != "observable" && (
					<SubmitButton type="submit">Salvar</SubmitButton>
				)}
			</ProductFormModalElement>
		</Modal>
	);
};
