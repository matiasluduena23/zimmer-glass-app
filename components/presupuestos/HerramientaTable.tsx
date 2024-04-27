import React, { Dispatch, SetStateAction } from 'react';
import { Card } from '../ui/card';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { DialogHerramienta } from './DialogHerramienta';
import { Herramienta } from '@/lib/definitions';
import { Button } from '../ui/button';
import MinusCircleIcon from '@heroicons/react/24/outline/MinusCircleIcon';
type HerramientaTableoProps = {
	setHerramientas: Dispatch<SetStateAction<Herramienta[]>>;
	herramientas: Herramienta[];
};

export default function HerramientaTable({
	herramientas,
	setHerramientas,
}: HerramientaTableoProps) {
	return (
		<Card className="grid grid-cols-1 gap-8 max-w-[400px]">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Herramienta</TableHead>
						<TableHead>Cantidad</TableHead>
						<TableHead>Total</TableHead>
						<TableHead>Eliminar</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{herramientas
						? herramientas.map((herramienta) => (
								<TableRow key={herramienta.id}>
									<TableCell>
										{herramienta.herramienta}
									</TableCell>
									<TableCell className="font-medium">
										{herramienta.cantidad}
									</TableCell>

									<TableCell>$500000</TableCell>
									<TableCell>
										<Button
											className="p-2 ml-3"
											variant={'destructive'}
											onClick={() =>
												setHerramientas((prev) =>
													prev.filter(
														(item) =>
															item.id !==
															herramienta.id
													)
												)
											}
										>
											<MinusCircleIcon className="w-6 h-6 text-foreground" />
										</Button>
									</TableCell>
								</TableRow>
						  ))
						: null}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell>$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>

			<DialogHerramienta
				herramientas={herramientas}
				setHerramientas={setHerramientas}
			/>
		</Card>
	);
}
