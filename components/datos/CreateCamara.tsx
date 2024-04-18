import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';
type CreateDialogProps = {
	item: Vidrio | Camara | Herramienta;
};

export default function CreateCamara() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2">
					<p className="text-foreground text-base">Nuevo </p>
					<PlusIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Crear Nueva Camara</DialogTitle>
					<DialogDescription>
						Complete todos los campos
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="tipo" className="text-right">
							Tipo
						</Label>
						<Input id="tipo" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="precio" className="text-right">
							Precio
						</Label>
						<Input id="precio" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="stock" className="text-right">
							Stock
						</Label>
						<Input id="stock" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Crear</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
