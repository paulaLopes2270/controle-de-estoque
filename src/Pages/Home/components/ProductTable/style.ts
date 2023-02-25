import styled from "styled-components";

export const TableContainer = styled.div`
	flex: 1 1;
	display: flex;
	overflow: auto;
`;

export const Table = styled.table`
	border-collapse: collapse;
	border-radius: 4px 4px 0 0;
	overflow: hidden;
	min-width: 100%;
	max-width: 100%;
	overflow-x: auto;
`;
export const Tr = styled.tr`
	border: 1px solid gray;
	:hover {
		background-color: #f5f5f5;
	}
	:first-child {
		background: red;
		border: none;
		border: 1px solid red;
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

export const statusColors = {
	aboveMax: "green",
	betweenMinAndMax: "yellow",
	belowMin: "red",
};

interface IStatusIcon {
	status: keyof typeof statusColors;
}

export const StatusIcon = styled.div<IStatusIcon>`
	width: 15px;
	height: 15px;
	border-radius: 100%;
	background: ${({ status }) => statusColors[status] || "transparent"};
	margin: 0 auto;
`;
