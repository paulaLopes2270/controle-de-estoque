import styled from "styled-components";

export const TableContainer = styled.div`
	display: flex;
	overflow: auto;
`;

export const Table = styled.table`
	border-collapse: collapse;
	border-radius: 4px 4px 0 0;
	overflow: hidden;
	min-width: calc(100% - 30px);
	max-width: 100%;
	overflow-x: auto;
	thead {
		background: brown;
		border: none;
		border: 1px solid red;
	}
`;
export const Tr = styled.tr`
	border: 1px solid gray;
	:hover {
		background-color: #f5f5f5;
	}
`;

interface ITd {
	minWidth?: string;
	textAling?: string;
}

export const Th = styled.th<ITd>`
	color: white;
	border-collapse: collapse;
	padding: 10px;
	text-transform: capitalize;
	min-width: ${({ minWidth }) => minWidth || "100px"};
	text-align: ${({ textAling }) => textAling || "center"};
`;

interface ITd {
	textAling?: string;
}

export const Td = styled.td<ITd>`
	padding: 10px;
	text-transform: capitalize;
	text-align: ${({ textAling }) => textAling || "center"};
`;

const statusColors = {
	aboveMax: "green",
	betweenMinAndMax: "yellow",
	belowMin: "red",
};

export type IStatusColors = keyof typeof statusColors;

export interface IStatusIcon {
	status: IStatusColors;
}

export const StatusIcon = styled.div<IStatusIcon>`
	width: 15px;
	height: 15px;
	border-radius: 100%;
	background: ${({ status }) => statusColors[status] || "transparent"};
	margin: 0 auto;
`;

export const ActionButton = styled.button``;
