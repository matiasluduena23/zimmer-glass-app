import { z } from 'zod';

export type Vidrio = {
	id: string;
	tipo: string;
	precio: number;
	stock: number;
};

export type Camara = {
	id: string;
	tipo: string;
	precio: number;
	stock: number;
};

export type Herramienta = {
	id: string;
	tipo: string;
	precio: number;
	stock: number;
};

export type Cliente = {
	id: string;
	nombre: string;
	empresa?: string;
	telefono: number;
	direccion: string;
	correo?: string;
	dni?: number;
	cuit?: number;
	saldo: number;
	detalle?: string;
};

export const ClienteSchema = z.object({
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
