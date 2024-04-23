import { z } from 'zod';

export const DatoSchema = z.object({
	id: z.string().optional(),
	tipo: z
		.string({
			required_error: 'Debe ingresar un tipo',
		})
		.min(3, { message: 'Debe ingresar un tipo' }),
	precio: z.coerce
		.number({
			required_error: 'Debe ingresar un precio',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un precio' }),
	stock: z.coerce
		.number({
			required_error: 'Debe ingresar un stock',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un stock' }),
});

export const ClienteSchema = z.object({
	id: z.string().optional(),
	nombre: z
		.string({
			required_error: 'Debe ingresar un nombre',
		})
		.min(5, { message: 'Debe ingresar un nombre' }),
	empresa: z.string().optional(),
	telefono: z.coerce
		.number({
			required_error: 'Debe ingresar un telefono',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un telefono' }),
	direccion: z
		.string({
			required_error: 'Debe ingresar una direccion',
		})
		.min(5, { message: 'Debe ingresar una direccion' }),
	correo: z.string().optional(),
	dni: z.coerce
		.number({
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un telefono' })
		.optional(),
	cuit: z.coerce
		.number({
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un telefono' })
		.optional(),
	saldo: z.coerce
		.number({
			required_error: 'Debe ingresar un saldo',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.optional(),
	detalle: z.string().optional(),
});

export type Cliente = z.infer<typeof ClienteSchema>;
export type Dato = z.infer<typeof DatoSchema>;
