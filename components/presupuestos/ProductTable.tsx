import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { MinusCircleIcon } from '@heroicons/react/24/outline';
import { Checkbox } from '../ui/checkbox';
import { Producto } from '@/lib/definitions';
import { Button } from '../ui/button';
import { Dispatch, SetStateAction } from 'react';
import { Card } from '../ui/card';
type ProductTableProps = {
	setProducts: Dispatch<SetStateAction<Producto[]>>;
	products: Producto[];
};

export default function ProductTable({
	setProducts,
	products,
}: ProductTableProps) {
	console.log(products);
	return (
		<Card>
			<Table>
				<TableCaption>Productos agregados</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Cantidad</TableHead>
						<TableHead>Alto</TableHead>
						<TableHead>Ancho</TableHead>
						<TableHead>Vidrio</TableHead>
						<TableHead>Camara</TableHead>
						<TableHead>Vidrio 2</TableHead>
						<TableHead>Total</TableHead>
						<TableHead>Eliminar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products
						? products.map((producto) => (
								<TableRow key={producto.id}>
									<TableCell className="font-medium">
										{producto.cantidad}
									</TableCell>
									<TableCell>{producto.alto}</TableCell>
									<TableCell>{producto.ancho}</TableCell>
									<TableCell>{producto.camaraID}</TableCell>
									<TableCell>{producto.vidrio1ID}</TableCell>
									<TableCell>{producto.vidrio2ID}</TableCell>
									<TableCell>$500000</TableCell>
									<TableCell>
										<Button
											className="p-2 ml-3"
											variant={'destructive'}
											onClick={() =>
												setProducts((prev) =>
													prev.filter(
														(item) =>
															item.id !==
															producto.id
													)
												)
											}
										>
											<MinusCircleIcon className="w-6 h-6 text-foreground" />
										</Button>
									</TableCell>
								</TableRow>
						  ))
						: null}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={7}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</Card>
	);
}
