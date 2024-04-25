import React from 'react';
import CreateUpdateCliente from '@/components/clientes/CreateUpdateCliente';
import { clientes } from '@/data/data';
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
