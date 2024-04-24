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
import { TrashIcon } from '@heroicons/react/24/outline';
import type { Dato } from '@/lib/definitions';
type DeleteDialogProps = {
	item: Dato;
	tipo: string;
};

export default function DeleteDialog({ item, tipo }: DeleteDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'destructive'}>
					<TrashIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Seguro quieres eliminar el item?</DialogTitle>
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
