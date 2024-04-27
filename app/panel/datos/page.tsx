import React from 'react';
import DatoTable from '@/components/datos/DatoTable';
import { DATO_TYPES } from '@/lib/constants';
import { vidriosData, camarasData, herramientasData } from '@/data/data';

export default function page() {
	return (
		<div>
			<div className="grid  grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-4">
				<DatoTable data={camarasData} tipo={DATO_TYPES.CAMARA} />
				<DatoTable data={vidriosData} tipo={DATO_TYPES.VIDRIO} />
				<DatoTable
					data={herramientasData}
					tipo={DATO_TYPES.HERRAMIENTA}
				/>
			</div>
		</div>
	);
}
