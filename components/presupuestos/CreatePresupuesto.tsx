'use client';

import { Button } from '@/components/ui/button';
import FormPresupuesto from './FormPresupuesto';
import ProductTable from '@/components/presupuestos/ProductTable';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

export default function CreatePresupuesto() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2">Nuevo</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[900px] ">
				<DialogHeader>
					<DialogTitle>Presupuesto</DialogTitle>
					<DialogDescription>
						Complete todos los campos
					</DialogDescription>
				</DialogHeader>
				<FormPresupuesto />
				<ProductTable />
			</DialogContent>
		</Dialog>
	);
}
