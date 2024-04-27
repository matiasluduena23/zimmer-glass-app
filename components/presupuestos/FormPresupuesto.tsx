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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Producto, PresupuestoSchema } from '@/lib/definitions';
import { clientesData } from '@/data/data';
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

	const form = useForm<z.infer<typeof PresupuestoSchema>>({
		resolver: zodResolver(PresupuestoSchema),
		defaultValues: defaultValues,
	});

	function onSubmit(values: z.infer<typeof PresupuestoSchema>) {
		values.id = uuidv4();
		console.log(values);
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="grid grid-cols-1 gap-8 max-w-[400px] ">
						<FormField
							control={form.control}
							name="clienteID"
							render={({ field }) => (
								<FormItem className="relative">
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
											{clientesData
												? clientesData.map(
														(cliente) => (
															<SelectItem
																key={cliente.id}
																value={
																	cliente.id
																}
															>
																{cliente.nombre}
															</SelectItem>
														)
												  )
												: null}
										</SelectContent>
									</Select>
									<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="observaciones"
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
									<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2">
							<div className="flex flex-col justify-start">
								<p>total:</p>
								<p>$ 4000000</p>
							</div>
							<Button type="submit" className="self-end">
								Cargar presupuesto
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</>
	);
}
