'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { PlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { ClienteSchema } from '@/lib/definitions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { Cliente } from '@/lib/definitions';
import { CLIENTE_DEFAULT_VALUES } from '@/lib/constants';

type UpdateClienteProps = {
	data?: Cliente;
	buttonText?: string;
};

export default function CreateUpdateCliente({
	data,
	buttonText,
}: UpdateClienteProps) {
	const defaultValue = data
		? {
				nombre: data.nombre,
				telefono: data.telefono,
				direccion: data.direccion,
				empresa: data.empresa,
				correo: data.correo,
				dni: data.dni,
				cuit: data.cuit,
				saldo: data.saldo,
				detalle: data.detalle,
		  }
		: CLIENTE_DEFAULT_VALUES;

	const form = useForm<z.infer<typeof ClienteSchema>>({
		resolver: zodResolver(ClienteSchema),
		defaultValues: defaultValue,
	});

	function onSubmit(values: z.infer<typeof ClienteSchema>) {
		if (data?.id) {
			console.log('update');
		} else {
			console.log('create');
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center gap-2">
					{buttonText ? (
						<>
							<p className="text-foreground text-base">Nuevo </p>
							<PlusIcon className="h-6 w-6 text-foreground" />
						</>
					) : (
						<ArrowPathIcon className="h-6 w-6 text-foreground" />
					)}
				</Button>
			</DialogTrigger>
			<DialogContent className="min-w-[850px] ">
				<DialogHeader>
					<DialogTitle>
						{buttonText ? 'Crear Cliente' : 'Modificar Cliente'}
					</DialogTitle>
					<DialogDescription>
						Complete el formulario
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid grid-cols-3 gap-2">
							<div className="grid gap-4 py-4 ">
								<FormField
									control={form.control}
									name="nombre"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Nombre</FormLabel>
											<FormControl>
												<Input
													placeholder="Nombre completo"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="empresa"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Empresa</FormLabel>
											<FormControl>
												<Input
													placeholder="Nombre empresa"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="telefono"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Telefono</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="3512322334"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
							</div>
							<div className="grid gap-4 py-4  ">
								<FormField
									control={form.control}
									name="direccion"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Direction</FormLabel>
											<FormControl>
												<Input
													placeholder="F. alcorta 285 Cba."
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="correo"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input
													placeholder="matias@gmail.com"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="dni"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>DNI</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="31788344"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
							</div>
							<div className="grid gap-4 py-4  ">
								<FormField
									control={form.control}
									name="cuit"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>CUIT</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="3334223339098"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="saldo"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>saldo $</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="1200"
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="detalle"
									render={({ field }) => (
										<FormItem className="relative">
											<FormLabel>Detalle</FormLabel>
											<FormControl>
												<Input
													placeholder="Cliente mayorista..."
													{...field}
												/>
											</FormControl>

											<FormMessage className="absolute -bottom-5 left-0" />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<Button type="submit" className="mt-4">
							{buttonText ? 'Crear' : 'Modificar'}
						</Button>
					</form>
				</Form>

				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
