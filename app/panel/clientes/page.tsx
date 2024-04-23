import React from 'react';
import type { Cliente } from '@/lib/definitions';
import CreateUpdateCliente from '@/components/clientes/CreateUpdateCliente';

import ClientesTable from '@/components/clientes/ClientesTable';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';

export default function page() {
	return (
		<section>
			<Card>
				<CardHeader>
					<h2 className="text-center text-2xl  mt-8 pb-4 ">
						Clientes
					</h2>
				</CardHeader>
				<ClientesTable data={clientes} />
				<CardFooter className="mt-4">
					<CreateUpdateCliente buttonText="Nuevo" />
				</CardFooter>
			</Card>
		</section>
	);
}

const clientes: Cliente[] = [
	{
		id: '0',
		nombre: 'Juan Perez',
		empresa: 'Pepito SRL',
		telefono: 351345568,
		direccion: 'Arroyto 8756 Cordoba',
		correo: 'pepito@gmail.com',
		dni: 31783685,
		cuit: 533988768882,
		saldo: 100000,
		detalle: '',
	},
	{
		id: '1',
		nombre: 'Ramon Farias',
		empresa: 'La Toma SA',
		telefono: 3513455222,
		direccion: 'La pampa 2333 Las Varillas',
		correo: 'toma@gmail.com',
		dni: 31783685,
		cuit: 533988768882,
		saldo: 30000,
		detalle: 'algun detalle del cliente',
	},
];
