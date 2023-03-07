import {
	Dispatch,
	SetStateAction,
	FormEventHandler,
	ChangeEvent,
	useRef,
} from "react";
import { Modal } from "../../../../../../components";
import { Label, ProductFormModalElement, SubmitButton } from "./style";
import { IProduct } from "../../../../../../types/IProdutct";
import { IActionType } from "../../interface";

interface IProductFormModal {
	useModal: [boolean, Dispatch<SetStateAction<boolean>>];
	actionType: IActionType;
	useTargetProduct: [
		IProduct | null,
		Dispatch<SetStateAction<IProduct | null>>
	];
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
	useTargetProduct,
}: IProductFormModal) => {
	const [targetProduct, setTargetProduct] = useTargetProduct;
	const inputsDidDisabled = actionType === "observable";
	const actionTypeIsNotNew = actionType !== "new";
	const titleByType: Record<typeof actionType, string> = {
		edit: "Editar Produto",
		new: "Novo Produto",
		observable: "Visualizar Produto",
	};

	const elementHandleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		productPropName: keyof IProduct
	) => {
		const { value } = event?.target;

		setTargetProduct((targetProduct) => {
			if (!targetProduct) {
				return targetProduct;
			}
			const updatedProduct: IProduct = { ...targetProduct };

			switch (typeof updatedProduct[productPropName]) {
				case "string":
					console.log(updatedProduct[productPropName])
					updatedProduct[productPropName] = String(value);
					break;
				case "number":
					updatedProduct[productPropName] =
						Number.parseFloat(value.toString()) || 0;
					break;
				case "boolean":
					updatedProduct[productPropName] = Boolean(value);
					break;
				default:
					console.error(
						`Type of property '${productPropName}' is not supported.`
					);
					break;
			}

			return updatedProduct;
		});
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
		<Modal
			useModal={useModal}
			closeModalHandleClick={() => setTargetProduct(null)}>
			<h2>{titleByType[actionType]}</h2>
			<ProductFormModalElement onSubmit={onSubmitHandleClick}>
				{actionType !== "new" && (
					<Label size="small">
						<strong>Id:</strong>
						<input
							disabled
							value={(actionTypeIsNotNew && targetProduct?.id) || ""}
							name="productId"
						/>
					</Label>
				)}
				<Label size="large">
					<strong>Nome:</strong>
					<input
						onChange={(event) => elementHandleChange(event, "name")}
						disabled={inputsDidDisabled}
						value={(actionTypeIsNotNew && targetProduct?.name) || ""}
						name="productName"
					/>
				</Label>
				<Label size="medium">
					<strong>Criado em:</strong>
					<input
						disabled
						type="date"
						name="createdAt"
						value={
							actionTypeIsNotNew && targetProduct?.createdAt
								? new Date(targetProduct.createdAt)
										.toISOString()
										.substring(0, 10)
								: new Date().toISOString().substring(0, 10)
						}
					/>
				</Label>
				<Label size="medium">
					<strong>Preço:</strong>
					<input
						disabled={inputsDidDisabled}
						name="price"
						value={(actionTypeIsNotNew && targetProduct?.price) || ""}
						onChange={(event) => elementHandleChange(event, "price")}
					/>
				</Label>
				<Label size="medium">
					<strong>Validade:</strong>
					<input
						disabled={inputsDidDisabled}
						type="date"
						name="validity"
						value={
							actionTypeIsNotNew && targetProduct?.validity
								? new Date(targetProduct.validity)
										.toISOString()
										.substring(0, 10)
								: ""
						}
						onChange={(event) => elementHandleChange(event, "validity")}
					/>
				</Label>
				<Label>
					<strong>Categoria:</strong>
					<input
						disabled={inputsDidDisabled}
						name="category"
						value={(actionTypeIsNotNew && targetProduct?.category) || ""}
						onChange={(event) => elementHandleChange(event, "category")}
					/>
				</Label>
				<Label>
					<strong>Quantidade:</strong>
					<input
						disabled={inputsDidDisabled}
						name="amount"
						value={(actionTypeIsNotNew && targetProduct?.amount) || ""}
						onChange={(event) => elementHandleChange(event, "amount")}
					/>
				</Label>
				<Label>
					<strong>Quantidade maxima:</strong>
					<input
						disabled={inputsDidDisabled}
						name="maxAmount"
						value={(actionTypeIsNotNew && targetProduct?.maxAmount) || ""}
						onChange={(event) => elementHandleChange(event, "maxAmount")}
					/>
				</Label>
				<Label>
					<strong>Quantidade minima:</strong>
					<input
						disabled={inputsDidDisabled}
						name="minAmount"
						value={(actionTypeIsNotNew && targetProduct?.minAmount) || ""}
						onChange={(event) => elementHandleChange(event, "minAmount")}
					/>
				</Label>
				<Label size="large">
					<strong>Descrição:</strong>
					<textarea
						disabled={inputsDidDisabled}
						name="description"
						value={(actionTypeIsNotNew && targetProduct?.description) || ""}
						onChange={(event) => elementHandleChange(event, "description")}
					/>
				</Label>
				{actionType != "observable" && (
					<SubmitButton type="submit">Salvar</SubmitButton>
				)}
			</ProductFormModalElement>
		</Modal>
	);
};
