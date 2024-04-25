'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Producto } from '@/lib/definitions';
import FormPresupuesto from './FormPresupuesto';

export default function CreatePresupuesto() {
	const [products, setProducts] = useState<Producto[]>([]);
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2">Nuevo</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[900px] ">
				<DialogHeader>
					<DialogTitle>Presupuesto</DialogTitle>
				</DialogHeader>
				<FormPresupuesto
					setProducts={setProducts}
					products={products}
				/>
			</DialogContent>
			<DialogFooter></DialogFooter>
		</Dialog>
	);
}
