import styled from "styled-components";

export const ProductFormModalElement = styled.form`
	display: flex;
	flex-wrap: wrap;
	width: 500px;
	gap: 20px;
`;

type Size = "small" | "medium" | "large";

interface ILabel {
	size?: Size;
}

const sizes: Record<Size, string> = {
	small: "0 1 80px",
	medium: "0 1 153px",
	large: "2 1 80%",
};

export const Label = styled.label<ILabel>`
	flex: ${({ size }) => sizes[size || "medium"]};
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: space-evenly;
	max-width: ${({ size }) => size === "small" && "60px"};
	strong {
		font-size: 14px;
	}
	input {
		width: 100%;
		max-width: ${({ size }) => size === "small" && "60px"};
		max-height: 21px;
		box-sizing: border-box;
		font-weight: bold;
		:disabled {
			border: none;
		}
	}

	textarea {
		height: 100px;
		resize: none;
	}
`;

export const SubmitButton = styled.button`
	flex: 0 1 200px;
	margin-left: auto;
`;
