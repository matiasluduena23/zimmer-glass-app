import React from 'react';

import VidrioTable from '@/components/datos/VidrioTable';
import CamaraTable from '@/components/datos/CamaraTable';
import HerramientaTable from '@/components/datos/HerramientaTable';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';

export default function page() {
	return (
		<div>
			<div className="flex items-center justify-center space-x-4 h-screen">
				<VidrioTable data={vidrios} />
				<CamaraTable data={camaras} />
				<HerramientaTable data={herramientas} />
			</div>
		</div>
	);
}

const vidrios: Vidrio[] = [
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

const camaras: Camara[] = [
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

const herramientas: Herramienta[] = [
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
