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
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Dato, DatoSchema } from '@/lib/definitions';
import { DATO_DEFAULT_VALUES } from '@/lib/constants';
type CreateUpdateProps = {
	dato?: Dato;
	buttonText?: string;
	tipo?: string;
};

export default function CreateUpdateDato({
	dato,
	buttonText,
	tipo,
}: CreateUpdateProps) {
	const defaultValues = dato
		? {
				tipo: dato.tipo,
				precio: dato.precio,
				stock: dato.stock,
		  }
		: DATO_DEFAULT_VALUES;

	const form = useForm<z.infer<typeof DatoSchema>>({
		resolver: zodResolver(DatoSchema),
		defaultValues: defaultValues,
	});

	function onSubmit(values: z.infer<typeof DatoSchema>) {
		if (dato?.id) {
			console.log('entra en update');
			switch (tipo) {
				case 'Camara': {
					console.log('update Camara');
					break;
				}
				case 'Vidrio': {
					console.log('update Vidrio');
					break;
				}
				case 'Herramienta': {
					console.log('update Herramienta');
					break;
				}
				default: {
					throw new Error('Something went wrong updating dato');
					break;
				}
			}
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
							<p className="text-foreground text-base">
								{buttonText}
							</p>
							<PlusIcon className="h-6 w-6 text-foreground" />
						</>
					) : (
						<PencilIcon className="h-6 w-6 text-foreground" />
					)}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						{buttonText ? 'Crear Camara' : 'Modificar Camara'}
					</DialogTitle>
					<DialogDescription>
						Complete todos los campos
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="tipo"
							render={({ field }) => (
								<FormItem className="relative">
									<FormLabel>{tipo}</FormLabel>
									<FormControl>
										<Input
											placeholder="Tipo a"
											{...field}
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 left-0" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="precio"
							render={({ field }) => (
								<FormItem className="relative">
									<FormLabel>Precio</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="000"
											{...field}
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 left-0" />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="stock"
							render={({ field }) => (
								<FormItem className="relative">
									<FormLabel>Stock</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="000"
											{...field}
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 left-0" />
								</FormItem>
							)}
						/>
						<Button type="submit">
							{buttonText ? 'Crear' : 'Modificar'}
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
