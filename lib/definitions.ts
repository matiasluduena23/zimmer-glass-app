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
		.positive({ message: 'Debe ingresar un DNI' })
		.optional(),
	cuit: z.coerce
		.number({
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar un CUIT' })
		.optional(),
	saldo: z.coerce
		.number({
			required_error: 'Debe ingresar un saldo',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.optional(),
	detalle: z.string().optional(),
});

export const PresupuestoSchema = z.object({
	id: z.string().optional(),
	clienteID: z
		.string({
			required_error: 'Debe ingresar un cliente',
		})
		.min(5, { message: 'Debe ingresar un cliente' }),
	productos: z.array(z.object({})),
	total: z.coerce.number({
		required_error: 'Debe ingresar un total',
		invalid_type_error: 'Ingrese solo numeros',
	}),
	observaciones: z.string().optional(),
});

export const ProductoSchema = z.object({
	id: z.string().optional(),
	vidrio1ID: z
		.string({
			required_error: 'Debe ingresar un vidrio',
		})
		.min(5, { message: 'Debe ingresar un vidrio' }),
	camaraID: z.string().optional(),
	vidrio2ID: z.string().optional(),
	cantidad: z.coerce
		.number({
			required_error: 'Debe ingresar una cantidad',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar una cantidad' }),
	alto: z.coerce
		.number({
			required_error: 'Debe ingresar una medida',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar una medida' }),
	ancho: z.coerce
		.number({
			required_error: 'Debe ingresar una medida',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar una medida' }),
	pulido: z.enum(['60', '80', '120', '220', '400']).optional(),
});

export const HerramientaSchema = z.object({
	id: z.string().optional(),
	herramienta: z
		.string({
			required_error: 'Debe ingresar una herramienta',
		})
		.min(0, { message: 'Debe ingresar una herramienta' }),
	cantidad: z.coerce
		.number({
			required_error: 'Debe ingresar una cantidad',
			invalid_type_error: 'Ingrese solo numeros',
		})
		.positive({ message: 'Debe ingresar una cantidad' }),
});

export type Producto = z.infer<typeof ProductoSchema>;
export type Herramienta = z.infer<typeof HerramientaSchema>;
export type Cliente = z.infer<typeof ClienteSchema>;
export type Dato = z.infer<typeof DatoSchema>;
