import React from 'react';
import DatoTable from '@/components/datos/DatoTable';
import type { Dato } from '@/lib/definitions';
import { DATO_TYPES } from '@/lib/constants';

export default function page() {
	return (
		<div>
			<div className="flex items-center justify-center space-x-4 h-screen">
				<DatoTable data={camaras} tipo={DATO_TYPES.CAMARA} />
				<DatoTable data={vidrios} tipo={DATO_TYPES.VIDRIO} />
				<DatoTable data={herramientas} tipo={DATO_TYPES.HERRAMIENTA} />
			</div>
		</div>
	);
}

const vidrios: Dato[] = [
	{
		id: 'INV001',
		tipo: 'Vidrio 1',
		precio: 250.0,
		stock: 200,
	},
	{
		id: 'INV002',
		tipo: 'Vidrio 2',
		precio: 150.0,
		stock: 150,
	},
	{
		id: 'INV003',
		tipo: 'Vidrio 3',
		precio: 350.0,
		stock: 100,
	},
	{
		id: 'INV004',
		tipo: 'Vidrio 4',
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
		tipo: 'Vidrio 5',
		precio: 200.0,
		stock: 50,
	},
	{
		id: 'INV007',
		tipo: 'Vidrio 6',
		precio: 300.0,
		stock: 0,
	},
];

const camaras: Dato[] = [
	{
		id: 'INV001',
		tipo: 'Camara 1',
		precio: 250.0,
		stock: 200,
	},
	{
		id: 'INV002',
		tipo: 'Camara 2',
		precio: 150.0,
		stock: 150,
	},
	{
		id: 'INV003',
		tipo: 'Camara 3',
		precio: 350.0,
		stock: 100,
	},
	{
		id: 'INV004',
		tipo: 'Camara 4',
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
		tipo: 'Camara 5',
		precio: 200.0,
		stock: 50,
	},
	{
		id: 'INV007',
		tipo: 'Camara 6',
		precio: 300.0,
		stock: 0,
	},
];

const herramientas: Dato[] = [
	{
		id: 'INV001',
		tipo: 'herramienta 1',
		precio: 250.0,
		stock: 200,
	},
	{
		id: 'INV002',
		tipo: 'herramienta 2',
		precio: 150.0,
		stock: 150,
	},
	{
		id: 'INV003',
		tipo: 'herramienta 3',
		precio: 350.0,
		stock: 100,
	},
	{
		id: 'INV004',
		tipo: 'herramienta 4',
		precio: 450.0,
		stock: 50,
	},
	{
		id: 'INV005',
		tipo: 'herramienta',
		precio: 550.0,
		stock: 70,
	},
	{
		id: 'INV006',
		tipo: 'herramienta 5',
		precio: 200.0,
		stock: 50,
	},
	{
		id: 'INV007',
		tipo: 'herramienta 6',
		precio: 300.0,
		stock: 0,
	},
];
