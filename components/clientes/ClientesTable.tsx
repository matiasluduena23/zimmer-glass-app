import React from 'react';
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
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
	ChatBubbleLeftEllipsisIcon,
	AtSymbolIcon,
} from '@heroicons/react/24/outline';
import type { Cliente } from '@/lib/definitions';
import { Button } from '../ui/button';
import DeleteCliente from './DeleteCliente';
import CreateUpdateCliente from './CreateUpdateCliente';

type ClientesTableProps = {
	data: Cliente[];
};

export default function ClientesTable({ data }: ClientesTableProps) {
	return (
		<div>
			<Table>
				<TableCaption>Lista de clientes.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Nombre </TableHead>
						<TableHead>Empresa</TableHead>
						<TableHead>telefono</TableHead>
						<TableHead>Direccion</TableHead>
						<TableHead>Correo</TableHead>
						<TableHead>DNI</TableHead>
						<TableHead>CUIT</TableHead>
						<TableHead>Saldo </TableHead>
						<TableHead>Detalle</TableHead>
						<TableHead>Modificar</TableHead>
						<TableHead>Eliminar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map((cliente) => (
						<TableRow key={cliente.id}>
							<TableCell className="font-medium">
								{cliente.nombre}
							</TableCell>
							<TableCell>{cliente.empresa}</TableCell>
							<TableCell>{cliente.telefono}</TableCell>
							<TableCell>{cliente.direccion}</TableCell>
							<TableCell>
								{cliente.correo && (
									<HoverCard>
										<HoverCardTrigger asChild>
											<Button variant={'link'}>
												<AtSymbolIcon className="h-4 w-4 text-foreground" />
											</Button>
										</HoverCardTrigger>
										<HoverCardContent className="w-80">
											<div className="flex justify-between space-x-4">
												<p>{cliente.correo}</p>
											</div>
										</HoverCardContent>
									</HoverCard>
								)}
							</TableCell>
							<TableCell>{cliente.dni}</TableCell>
							<TableCell>{cliente.cuit}</TableCell>
							<TableCell>${cliente.saldo}</TableCell>
							<TableCell>
								{cliente.detalle && (
									<HoverCard>
										<HoverCardTrigger asChild>
											<Button variant={'link'}>
												<ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-foreground" />
											</Button>
										</HoverCardTrigger>
										<HoverCardContent className="w-80">
											<div className="flex justify-between space-x-4">
												<p>{cliente.detalle}</p>
											</div>
										</HoverCardContent>
									</HoverCard>
								)}
							</TableCell>
							<TableCell>
								<CreateUpdateCliente data={cliente} />
							</TableCell>
							<TableCell>
								<DeleteCliente data={cliente} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={7}>Total deuda clientes</TableCell>
						<TableCell>$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
}
