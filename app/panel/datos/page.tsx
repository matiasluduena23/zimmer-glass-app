import React from 'react';
import DatoTable from '@/components/datos/DatoTable';
import { DATO_TYPES } from '@/lib/constants';
import { vidrios, camaras, herramientas } from '@/data/data';

export default function page() {
	return (
		<div>
			<div className="flex items-center justify-center space-x-4 h-screen">
				<DatoTable data={camaras} tipo={DATO_TYPES.CAMARA} />
				<DatoTable data={vidrios} tipo={DATO_TYPES.VIDRIO} />
				<DatoTable data={herramientas} tipo={DATO_TYPES.HERRAMIENTA} />
			</div>
		</div>
	);
}
