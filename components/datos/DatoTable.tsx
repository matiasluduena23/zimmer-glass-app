import * as React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
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
import {} from '@heroicons/react/24/outline';
import type { Dato } from '@/lib/definitions';
import DeleteDialog from '@/components/datos/DeleteDialog';
import CreateUpdateDato from '@/components/datos/CreateUpdateDato';
import { Card, CardFooter, CardTitle } from '../ui/card';
type DatoTableProps = {
	data: Dato[];
	tipo: string;
};

export default function DatoTable({ data, tipo }: DatoTableProps) {
	return (
		<Card className="flex flex-col items-center gap-4 p-2">
			<CardTitle>{tipo}</CardTitle>

			<ScrollArea className="h-[450px] w-[450px] rounded-md border">
				<Table>
					<TableCaption>Lista de {tipo}s</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Tipo</TableHead>
							<TableHead>Precio</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead className="text-right">
								Modificar
							</TableHead>
							<TableHead className="text-right">
								Eliminar
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.map((data) => (
							<TableRow key={data.id}>
								<TableCell className="font-medium">
									{data.tipo}
								</TableCell>
								<TableCell>$ {data.precio}</TableCell>
								<TableCell>{data.stock}</TableCell>
								<TableCell className="text-right">
									<CreateUpdateDato dato={data} tipo={tipo} />
								</TableCell>
								<TableCell className="text-right">
									<DeleteDialog item={data} tipo={tipo} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={4}>algun calculo</TableCell>
							<TableCell className="text-right">
								$2,500.00
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</ScrollArea>
			<CardFooter>
				<CreateUpdateDato buttonText="Nuevo" tipo={tipo} />
			</CardFooter>
		</Card>
	);
}
