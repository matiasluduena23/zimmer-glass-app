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
