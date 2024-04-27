import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/presupuestos/DataTable';
import { presupuestoData } from '@/data/data';
import { columns } from '@/components/presupuestos/Columns';

export default function page() {
	return (
		<div>
			<h1 className="text-2xl">Presupuestos</h1>
			<div className="flex items-center gap-6 my-4">
				<Input />
				<Link href={'/panel/presupuestos/create'}>
					<Button>Crear Presupuesto</Button>
				</Link>
			</div>
			<div className="w-full">
				<DataTable data={presupuestoData} columns={columns} />
			</div>
		</div>
	);
}
