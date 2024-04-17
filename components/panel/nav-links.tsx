'use client';

import {
	CircleStackIcon,
	HomeIcon,
	DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Inicio', href: '/panel', icon: HomeIcon },
	{
		name: 'Prespuestos',
		href: '/panel/presupuestos',
		icon: DocumentDuplicateIcon,
	},
	{ name: 'Datos', href: '/panel/datos', icon: CircleStackIcon },
];

export default function NavLinks() {
	const pathName = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link key={link.name} href={link.href}>
						<Button
							variant={'outline'}
							className={clsx(
								'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-mdp-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3',
								{
									'bg-primary text-primary-foreground':
										pathName === link.href,
								}
							)}
						>
							<LinkIcon className="w-6" />
							<p className="hidden md:block">{link.name}</p>
						</Button>
					</Link>
				);
			})}
		</>
	);
}
