'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
	type Presupuesto,
	type vidrioTableFormat,
	type HerramientaTableFormat,
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
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '../ui/badge';

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
		cell: ({ row }) => {
			return <div>{row.getValue('clienteID')}</div>;
		},
	},
	{
		accessorKey: 'vidrios',
		header: 'Vidrios',
		cell: ({ row }) => {
			const rowVidrios: vidrioTableFormat[] = row.getValue('vidrios');
			return <PopoverVidrio data={rowVidrios} />;
		},
	},
	{
		accessorKey: 'herramientas',
		header: 'Herramientas',
		cell: ({ row }) => {
			const rowValues: HerramientaTableFormat[] =
				row.getValue('herramientas');
			return rowValues.length ? (
				<PopoverHerramienta data={rowValues} />
			) : (
				<div></div>
			);
		},
	},
	{
		accessorKey: 'total',
		header: 'Total',
		cell: ({ row }) => <span>$ {row.getValue('total')}</span>,
	},
	{
		accessorKey: 'estado',
		header: 'Estado',
		cell: ({ row }) => {
			switch (row.getValue('estado')) {
				case 'cobrado': {
					return (
						<Badge className="bg-green-400 hover:bg-green-300">
							Cobrado
						</Badge>
					);
				}
				case 'pendiente': {
					return (
						<Badge className="bg-orange-400 hover:bg-orange-300">
							Pendiente
						</Badge>
					);
				}
				case 'enviado': {
					return <Badge>Enviado</Badge>;
				}
				default:
					break;
			}
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Acciones</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(payment.clienteID)
							}
						>
							Modificar presupuesto
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Actualizar estado</DropdownMenuItem>
						<DropdownMenuItem>Eliminar</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function PopoverHerramienta({ data }: any | HerramientaTableFormat[]) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">
					<EyeIcon className="h-4 w-4 " />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[700px]">
				{data && <TableHerramiena herramientas={data} />}
			</PopoverContent>
		</Popover>
	);
}

export function PopoverVidrio({ data }: any | vidrioTableFormat[]) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">
					<EyeIcon className="h-4 w-4 " />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[700px]">
				{data && <TableVidrio vidrios={data} />}
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

export function TableHerramiena({
	herramientas,
}: any | HerramientaTableFormat) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Herramienta</TableHead>
					<TableHead>Cantidad</TableHead>
					<TableHead>Precio</TableHead>
					<TableHead>Total</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{herramientas.map((herramienta: HerramientaTableFormat) => (
					<TableRow key={herramienta.herramienta}>
						<TableCell>{herramienta.herramienta}</TableCell>
						<TableCell>{herramienta.cantidad}</TableCell>
						<TableCell>{herramienta.precio}</TableCell>
						<TableCell>{herramienta.total}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell>$2,500.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
}
