import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CardWithForm() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Crear Vidrio</CardTitle>
				<CardDescription>Ingresa los datos del vidrio</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="tipo">Tipo</Label>
						<Input id="tipo" placeholder="Tipo de Vidrio" />
					</div>
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="precio">Precio</Label>
						<Input
							id="precio"
							placeholder="Precio por metro cuadrado"
						/>
					</div>
					<div className="flex flex-col space-y-1.5">
						<Label htmlFor="stock">Stock</Label>
						<Input
							id="stock"
							placeholder="Stock por metro cuadrado"
						/>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Salir</Button>
				<Button>Crear</Button>
			</CardFooter>
		</Card>
	);
}
