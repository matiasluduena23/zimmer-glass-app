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
import { Button } from '../ui/button';
import { ArrowPathIcon, XCircleIcon } from '@heroicons/react/24/outline';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';
type DataTableProps = {
	title: String;
	data: Vidrio[] | Camara[] | Herramienta[];
};

export default function DataTable({ title, data }: DataTableProps) {
	return (
		<section className="flex flex-col items-center gap-4">
			<h2 className="text-center">{title}</h2>

			<ScrollArea className="h-72 w-[450px] rounded-md border">
				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
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
									<Button>
										<ArrowPathIcon className="h-6 w-6 text-foreground" />
									</Button>
								</TableCell>
								<TableCell className="text-right">
									<Button variant={'destructive'}>
										<XCircleIcon className="h-6 w-6 text-foreground" />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={4}>Total</TableCell>
							<TableCell className="text-right">
								$2,500.00
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</ScrollArea>
		</section>
	);
}
