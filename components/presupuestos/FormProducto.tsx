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
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { vidrios, camaras, herramientas } from '@/data/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProductoSchema, Producto } from '@/lib/definitions';
type FormProductoProps = {
	setProducts: Dispatch<SetStateAction<Producto[]>>;
};

export default function FormProducto({ setProducts }: FormProductoProps) {
	const defaultValues = {
		id: '',
		vidrio1ID: '',
		camaraID: '',
		vidrio2ID: '',
		cantidad: 0,
		alto: 0,
		ancho: 0,
		pulido: undefined,
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	const form = useForm<z.infer<typeof ProductoSchema>>({
		resolver: zodResolver(ProductoSchema),
		defaultValues: defaultValues,
	});

	function onSubmit(values: z.infer<typeof ProductoSchema>) {
		values.id = uuidv4();
		setProducts((prev) => [...prev, values]);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-10 my-2 "
			>
				<div className="grid grid-cols-3 gap-8  ">
					<FormField
						control={form.control}
						name="vidrio1ID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Vidrio</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
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

					<FormField
						control={form.control}
						name="pulido"
						render={({ field }) => (
							<FormItem className="space-y-3">
								<FormLabel>Pulido</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex items-center gap-4"
									>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="full" />
											</FormControl>
											<FormLabel className="font-normal">
												Full
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="medio" />
											</FormControl>
											<FormLabel className="font-normal">
												Medio
											</FormLabel>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormControl>
												<RadioGroupItem value="no" />
											</FormControl>
											<FormLabel className="font-normal">
												No
											</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						className="self-end"
						onClick={handleClick}
						variant={'secondary'}
					>
						Herramientas
					</Button>
					<Button className="self-end" type="submit">
						Agregar
					</Button>
				</div>
			</form>
		</Form>
	);
}
