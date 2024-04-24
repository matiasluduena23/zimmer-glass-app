import React from 'react';
import {
	Form,
	FormControl,
	FormDescription,
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
import { Input } from '@/components/ui/input';
import { vidrios, camaras, herramientas } from '@/data/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProductoSchema } from '@/lib/definitions';

export default function FormPresupuesto() {
	const form = useForm<z.infer<typeof ProductoSchema>>({
		resolver: zodResolver(ProductoSchema),
		defaultValues: {},
	});

	function onSubmit(values: z.infer<typeof ProductoSchema>) {
		console.log(values);
	}
	const vidrios2 = [
		{
			id: 'INV001',
			tipo: 'Vidrio 1',
			precio: 250.0,
			stock: 200,
		},
		{
			id: 'INV002',
			tipo: 'Vidrio 2',
			precio: 250.0,
			stock: 200,
		},
		{
			id: 'INV002',
			tipo: 'Vidrio 3',
			precio: 250.0,
			stock: 200,
		},
	];
	console.log(vidrios);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-3 gap-8  ">
					<FormField
						control={form.control}
						name="vidrio1ID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Vidrio</FormLabel>
								<Select
									onValueChange={field.onChange}
									// defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Seleccione un Vidrio" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{vidrios
											? vidrios.map((camara) => (
													<SelectItem
														key={camara.id}
														value={camara.tipo}
													>
														{camara.tipo}
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
						name="camaraID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Camara</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a verified email to display" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="0">-</SelectItem>
										{camaras
											? camaras.map((camara) => (
													<SelectItem
														key={camara.id}
														value={camara.tipo}
													>
														{camara.tipo}
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
						name="vidrio2ID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Vidrio 2 DVH</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a verified email to display" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{vidrios
											? vidrios.map((camara) => (
													<SelectItem
														key={camara.id}
														value={camara.tipo}
													>
														{camara.tipo}
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
						name="cantidad"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Cantidad</FormLabel>
								<FormControl>
									<Input placeholder="000" {...field} />
								</FormControl>
								<FormMessage className="absolute -bottom-5 left-0" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="alto"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Alto</FormLabel>
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
						name="ancho"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Ancho</FormLabel>
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
				</div>

				<Button type="submit">Agregar</Button>
			</form>
		</Form>
	);
}
