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
import type { Cliente } from '@/app/lib/definitions';

export default function CreateCliente() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2">
					<p className="text-foreground text-base">Nuevo </p>
					<PlusIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[850px] ">
				<DialogHeader>
					<DialogTitle>Crear Nuevo Cliente</DialogTitle>
					<DialogDescription>
						Complete el formulario
					</DialogDescription>
				</DialogHeader>
				<div className="grid grid-cols-3 gap-2">
					<div className="grid gap-4 py-4 ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="nombre" className="text-right">
								Nombre
							</Label>
							<Input id="nombre" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="empresa" className="text-right">
								empresa
							</Label>
							<Input id="empresa" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="telefono" className="text-right">
								telefono
							</Label>
							<Input id="telefono" className="col-span-3" />
						</div>
					</div>
					<div className="grid gap-4 py-4  ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="direccion" className="text-right">
								direccion
							</Label>
							<Input id="direccion" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="correo" className="text-right">
								correo
							</Label>
							<Input id="correo" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="dni" className="text-right">
								dni
							</Label>
							<Input id="dni" className="col-span-3" />
						</div>
					</div>
					<div className="grid gap-4 py-4  ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="cuit" className="text-right">
								cuit
							</Label>
							<Input id="cuit" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="saldo" className="text-right">
								saldo
							</Label>
							<Input id="saldo" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="detalle" className="text-right">
								detalle
							</Label>
							<Input id="detalle" className="col-span-3" />
						</div>
					</div>
				</div>

				<DialogFooter>
					<Button type="submit">Crear</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
