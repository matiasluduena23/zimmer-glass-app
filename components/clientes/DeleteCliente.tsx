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
import type { Cliente } from '@/lib/definitions';
type DeleteClienteProps = {
	data: Cliente;
};

export default function DeleteCliente({ data }: DeleteClienteProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={'destructive'}>
					<TrashIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						Seguro quieres eliminar el cliente?
					</DialogTitle>
					<DialogDescription>
						{data.nombre} de la empresa {data.empresa} ?
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
