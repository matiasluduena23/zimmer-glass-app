import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { XCircleIcon } from '@heroicons/react/24/outline';
import type { Vidrio, Camara, Herramienta } from '@/app/lib/definitions';
type DeleteDialogProps = {
	item: Vidrio | Camara | Herramienta;
};

export default function DeleteDialog({ item }: DeleteDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'destructive'}>
					<XCircleIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Seuro quieres eliminar el item?</DialogTitle>
					<DialogDescription>
						Tipo {item.tipo} con el precio ${item.precio} y stock{' '}
						{item.stock}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button type="submit" variant={'destructive'}>
						Eliminar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
