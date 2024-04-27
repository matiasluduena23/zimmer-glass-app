'use client';

import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { Producto, Herramienta } from '@/lib/definitions';
import FormPresupuesto from './FormPresupuesto';
import FormProducto from './FormProducto';
import ProductTable from './ProductTable';
import HerramientaTable from './HerramientaTable';

export default function CreatePresupuesto() {
	const [products, setProducts] = useState<Producto[]>([]);
	const [herramientas, setHerramientas] = useState<Herramienta[]>([]);
	return (
		<section>
			<div className="flex flex-col gap-4 mb-8">
				<FormProducto setProducts={setProducts} />
				<ProductTable setProducts={setProducts} products={products} />
			</div>

			<div className="grid grid-cols-2 gap-4 mt-4 justify-start">
				<HerramientaTable
					herramientas={herramientas}
					setHerramientas={setHerramientas}
				/>
				<FormPresupuesto
					setProducts={setProducts}
					products={products}
				/>
			</div>
		</section>
	);
}
