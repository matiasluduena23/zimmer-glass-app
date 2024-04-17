import React from 'react';
import CardCamara from '@/components/datos/CardCamara';
import CardHerramientas from '@/components/datos/CardHerramientas';
import CardVidrio from '@/components/datos/CardVidrio';
import ModeToggle from '@/components/ModeToggle';

export default function page() {
	return (
		<section>
			<ModeToggle />
			<div className="flex items-center justify-center space-x-4">
				<CardCamara />
				<CardVidrio />
				<CardHerramientas />
			</div>
		</section>
	);
}
