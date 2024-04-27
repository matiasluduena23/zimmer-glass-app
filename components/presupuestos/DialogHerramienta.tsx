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
import { Input } from '@/components/ui/input';
import { herramientasData } from '@/data/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Herramienta, HerramientaSchema } from '@/lib/definitions';
import { Dispatch, SetStateAction, useState } from 'react';
type HerramientaDialogProps = {
	setHerramientas: Dispatch<SetStateAction<Herramienta[]>>;
	herramientas: Herramienta[];
};

export function DialogHerramienta({
	herramientas,
	setHerramientas,
}: HerramientaDialogProps) {
	const [open, setOpen] = useState(false);
	const form = useForm<z.infer<typeof HerramientaSchema>>({
		resolver: zodResolver(HerramientaSchema),
		defaultValues: {
			id: '',
			cantidad: 0,
			herramienta: '',
		},
	});

	function onSubmit(values: z.infer<typeof HerramientaSchema>) {
		setHerramientas((prev) => [...prev, values]);
		setOpen(!open);
	}

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogTrigger asChild>
				<Button className="max-w-[300px] mx-auto">
					Agregar Herramienta
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Agregar Herramienta</DialogTitle>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-8"
						>
							<FormField
								control={form.control}
								name="herramienta"
								render={({ field }) => (
									<FormItem className="max-w-[300px] ">
										<FormLabel>
											Complete todos los campos
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Seleccione Herramienta" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="0">
													-
												</SelectItem>
												{herramientasData
													? herramientasData.map(
															(herramienta) => (
																<SelectItem
																	key={
																		herramienta.id
																	}
																	value={
																		herramienta.tipo
																	}
																>
																	{
																		herramienta.tipo
																	}
																</SelectItem>
															)
													  )
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
									<FormItem>
										<FormLabel>Cantidad</FormLabel>
										<FormControl>
											<Input
												placeholder="123"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit">Agregar</Button>
						</form>
					</Form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
