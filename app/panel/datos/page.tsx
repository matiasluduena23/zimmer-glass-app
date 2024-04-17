import React from 'react';
import CardCamara from '@/components/datos/CardCamara';
import CardHerramientas from '@/components/datos/CardHerramientas';
import CardVidrio from '@/components/datos/CardVidrio';
import DataTable from '@/components/datos/DataTable';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';

export default function page() {
	return (
		<div>
			<div className="flex items-center justify-center space-x-4">
				<CardCamara />
				<CardVidrio />
				<CardHerramientas />
			</div>
			<DataTable title="Vidrios" data={vidrios} />
		</div>
	);
}

const vidrios: Vidrio[] = [
	{
		id: 'INV001',
		tipo: 'Paid',
		precio: 250.0,
		stock: 200,
	},
	{
		id: 'INV002',
		tipo: 'Pending',
		precio: 150.0,
		stock: 150,
	},
	{
		id: 'INV003',
		tipo: 'Unpaid',
		precio: 350.0,
		stock: 100,
	},
	{
		id: 'INV004',
		tipo: 'Paid',
		precio: 450.0,
		stock: 50,
	},
	{
		id: 'INV005',
		tipo: 'Paid',
		precio: 550.0,
		stock: 70,
	},
	{
		id: 'INV006',
		tipo: 'Pending',
		precio: 200.0,
		stock: 50,
	},
	{
		id: 'INV007',
		tipo: 'Unpaid',
		precio: 300.0,
		stock: 0,
	},
];
