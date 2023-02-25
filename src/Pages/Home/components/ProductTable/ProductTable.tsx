import { StatusIcon, Table, Td, Th, Tr } from "./style";

export const ProductTable = () => {
	return (
		<Table>
			<Tr>
				<Th>id</Th>
				<Th minWidth="200px" textAling="start">Nome</Th>
				<Th>Categoria</Th>
				<Th>Quantidade</Th>
				<Th>Maximo</Th>
				<Th>Minimo</Th>
				<Th>Vence em 30 dias</Th>
				<Th>Status</Th>
			</Tr>

			<Tr>
				<Td>10</Td>
				<Td textAling="start">Nome grande do produto 1</Td>
				<Td>Categoria 1</Td>
				<Td>10</Td>
				<Td>20</Td>
				<Td>5</Td>
				<Td>Sim</Td>
				<Td>
					<StatusIcon status="aboveMax" />
				</Td>
			</Tr>
			<Tr>
				<Td>10</Td>
				<Td textAling="start">Nome grande do produto 1</Td>
				<Td>Categoria 1</Td>
				<Td>10</Td>
				<Td>20</Td>
				<Td>5</Td>
				<Td>Sim</Td>
				<Td>
					<StatusIcon status="aboveMax" />
				</Td>
			</Tr>
		</Table>
	);
};
