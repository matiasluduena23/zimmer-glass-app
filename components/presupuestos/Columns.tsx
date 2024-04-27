'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
	PresupuestoSchema,
	type Presupuesto,
	type vidrioTableFormat,
} from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { EyeIcon } from '@heroicons/react/24/outline';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
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

export const columns: ColumnDef<Presupuesto>[] = [
	{
		accessorKey: 'fecha',
		header: () => <div>Fecha</div>,
		cell: ({ row }) => {
			const dateFormat = new Date(
				row.getValue('fecha')
			).toLocaleDateString('es-AR', {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric',
			});
			return <div>{dateFormat}</div>;
		},
	},
	{
		accessorKey: 'clienteID',
		header: 'Cliente',
	},
	{
		accessorKey: 'productos',
		header: () => <div>Pedido</div>,
		cell: ({ row }) => {
			console.log(row.getValue('productos'));
			return <PopoverPedido data={row.getValue('productos')} />;
		},
	},
	{
		accessorKey: 'total',
		header: 'Total',
	},
	{
		accessorKey: 'estado',
		header: 'Estado',
	},
];

export function PopoverPedido({ data }: any | vidrioTableFormat[]) {
	const vidrios: vidrioTableFormat = data.vidrio;
	console.log(vidrios);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">
					<EyeIcon className="h-4 w-4 " />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[700px]">
				{vidrios && <TableVidrio vidrios={vidrios} />}
			</PopoverContent>
		</Popover>
	);
}

export function TableVidrio({ vidrios }: any | vidrioTableFormat) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Vidrio</TableHead>
					<TableHead>Camara</TableHead>
					<TableHead>Vidrio dvh</TableHead>
					<TableHead>Cantidad</TableHead>
					<TableHead>Alto</TableHead>
					<TableHead>Ancho</TableHead>
					<TableHead>Pulido</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{vidrios.map((vidrio: vidrioTableFormat) => (
					<TableRow key={vidrio.vidrioID}>
						<TableCell>{vidrio.camaraID}</TableCell>
						<TableCell>{vidrio.vidrio2ID}</TableCell>
						<TableCell>{vidrio.cantidad}</TableCell>
						<TableCell>{vidrio.alto}</TableCell>
						<TableCell>{vidrio.ancho}</TableCell>
						<TableCell>{vidrio.pulido}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={5}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
