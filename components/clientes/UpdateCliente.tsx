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
import type { Cliente } from '@/app/lib/definitions';
type UpdateClienteProps = {
	data: Cliente;
};

export default function UpdateCliente({ data }: UpdateClienteProps) {
	const {
		id,
		nombre,
		empresa,
		telefono,
		direccion,
		correo,
		dni,
		cuit,
		saldo,
		detalle,
	} = data;
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<ArrowPathIcon className="h-6 w-6 text-foreground" />
				</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[850px] ">
				<DialogHeader>
					<DialogTitle>Modifica los datos del cliente</DialogTitle>
					<DialogDescription>Tipo</DialogDescription>
				</DialogHeader>
				<div className="grid grid-cols-3 gap-2">
					<div className="grid gap-4 py-4 ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="nombre" className="text-right">
								Nombre
							</Label>
							<Input
								id="nombre"
								className="col-span-3"
								defaultValue={nombre}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="empresa" className="text-right">
								empresa
							</Label>
							<Input
								id="empresa"
								className="col-span-3"
								defaultValue={empresa}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="telefono" className="text-right">
								telefono
							</Label>
							<Input
								id="telefono"
								className="col-span-3"
								defaultValue={telefono}
							/>
						</div>
					</div>
					<div className="grid gap-4 py-4  ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="direccion" className="text-right">
								direccion
							</Label>
							<Input
								id="direccion"
								className="col-span-3"
								defaultValue={direccion}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="correo" className="text-right">
								correo
							</Label>
							<Input
								id="correo"
								className="col-span-3"
								defaultValue={correo}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="dni" className="text-right">
								dni
							</Label>
							<Input
								id="dni"
								className="col-span-3"
								defaultValue={dni}
							/>
						</div>
					</div>
					<div className="grid gap-4 py-4  ">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="cuit" className="text-right">
								cuit
							</Label>
							<Input
								id="cuit"
								className="col-span-3"
								defaultValue={cuit}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="saldo" className="text-right">
								saldo
							</Label>
							<Input
								id="saldo"
								className="col-span-3"
								defaultValue={saldo}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="detalle" className="text-right">
								detalle
							</Label>
							<Input
								id="detalle"
								className="col-span-3"
								defaultValue={detalle}
							/>
						</div>
					</div>
				</div>

				<DialogFooter>
					<Button type="submit">Actualizar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
