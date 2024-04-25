import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import FormProducto from './FormProducto';
import ProductTable from '@/components/presupuestos/ProductTable';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProductoSchema, Producto } from '@/lib/definitions';
import { clientes } from '@/data/data';
import { Textarea } from '@/components/ui/textarea';
type FormPresupuestoProps = {
	setProducts: Dispatch<SetStateAction<Producto[]>>;
	products: Producto[];
};

export default function FormPresupuesto({
	products,
	setProducts,
}: FormPresupuestoProps) {
	const defaultValues = {
		id: '',
		clienteID: '',
		productos: [],
		total: 0,
		observaciones: '',
	};

	const form = useForm<z.infer<typeof ProductoSchema>>({
		resolver: zodResolver(ProductoSchema),
		defaultValues: defaultValues,
	});

	function onSubmit(values: z.infer<typeof ProductoSchema>) {
		values.id = uuidv4();
		console.log(values);
	}

	return (
		<>
			<FormProducto setProducts={setProducts} />
			<ProductTable setProducts={setProducts} products={products} />
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="grid grid-cols-3 gap-8  ">
						<FormField
							control={form.control}
							name="vidrio1ID"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Cliente</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleccione un Cliente" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{clientes
												? clientes.map((cliente) => (
														<SelectItem
															key={cliente.id}
															value={cliente.id}
														>
															{cliente.nombre}
														</SelectItem>
												  ))
												: null}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="ancho"
							render={({ field }) => (
								<FormItem className="relative">
									<FormLabel>Observaciones</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Observaciones del presupuesto.."
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage className="absolute -bottom-5 left-0" />
								</FormItem>
							)}
						/>
						<Button type="submit" className="self-end">
							Cargar presupuesto
						</Button>
					</div>
				</form>
			</Form>
		</>
	);
}
