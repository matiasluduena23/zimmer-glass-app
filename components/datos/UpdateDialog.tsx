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
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';
type UpdateDialogProps = {
	item: Vidrio | Camara | Herramienta;
};

export default function UpdateDialog({ item }: UpdateDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<ArrowPathIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Modifica los datos</DialogTitle>
					<DialogDescription>
						Tipo {item.tipo} con el precio ${item.precio} y stock{' '}
						{item.stock}
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="tipo" className="text-right">
							Tipo
						</Label>
						<Input
							id="tipo"
							defaultValue={item.tipo}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="precio" className="text-right">
							Precio
						</Label>
						<Input
							id="precio"
							defaultValue={item.precio}
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="stock" className="text-right">
							Stock
						</Label>
						<Input
							id="stock"
							defaultValue={item.stock}
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Actualizar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
