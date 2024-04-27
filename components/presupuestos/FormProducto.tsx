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
import { vidriosData, camarasData } from '@/data/data';
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
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
				<div className="grid grid-cols-4 gap-8  ">
					<FormField
						control={form.control}
						name="vidrio1ID"
						render={({ field }) => (
							<FormItem className="max-w-[300px] relative">
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
										{vidriosData
											? vidriosData.map((vidrio) => (
													<SelectItem
														key={vidrio.id}
														value={vidrio.tipo}
													>
														{vidrio.tipo}
													</SelectItem>
											  ))
											: null}
									</SelectContent>
								</Select>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="camaraID"
						render={({ field }) => (
							<FormItem className="max-w-[300px] relative">
								<FormLabel>Camara</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Seleccione Camara" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="0">-</SelectItem>
										{camarasData
											? camarasData.map((camara) => (
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
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="vidrio2ID"
						render={({ field }) => (
							<FormItem className="max-w-[300px] relative">
								<FormLabel>Vidrio 2 DVH</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Seleccione Vidrio" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{vidriosData
											? vidriosData.map((vidrio) => (
													<SelectItem
														key={vidrio.id}
														value={vidrio.tipo}
													>
														{vidrio.tipo}
													</SelectItem>
											  ))
											: null}
									</SelectContent>
								</Select>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="pulido"
						render={({ field }) => (
							<FormItem className="max-w-[300px] relative">
								<FormLabel>Pulido</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Seleccione Pulido" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="no">-</SelectItem>
										<SelectItem value="60">
											Grano 60
										</SelectItem>
										<SelectItem value="80">
											Grano 80
										</SelectItem>
										<SelectItem value="120">
											Grano 120
										</SelectItem>
										<SelectItem value="220">
											Grano 220
										</SelectItem>
										<SelectItem value="400">
											Grano 400
										</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="cantidad"
						render={({ field }) => (
							<FormItem className="relative max-w-[300px] ">
								<FormLabel>Cantidad</FormLabel>
								<FormControl>
									<Input placeholder="000" {...field} />
								</FormControl>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="alto"
						render={({ field }) => (
							<FormItem className="relative max-w-[300px]">
								<FormLabel>Alto</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="000"
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="ancho"
						render={({ field }) => (
							<FormItem className="relative max-w-[300px]">
								<FormLabel>Ancho</FormLabel>
								<FormControl>
									<Input
										className=""
										type="number"
										placeholder="000"
										{...field}
									/>
								</FormControl>
								<FormMessage className="absolute -bottom-4 left-0 text-[12px] " />
							</FormItem>
						)}
					/>

					<Button className="self-end max-w-[300px]" type="submit">
						Agregar
					</Button>
				</div>
			</form>
		</Form>
	);
}
