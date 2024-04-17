import Link from 'next/link';
import NavLinks from '@/components/panel/nav-links';
import ModeToggle from '@/components/ModeToggle';
import { PowerIcon } from '@heroicons/react/24/outline';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2  ">
			<Card className="rounded-md p-4 md:h-40 flex flex-col justify-between md:mb-2">
				<ModeToggle />
				<Link className="mb-2 text-xl mx-auto" href="/">
					ZIMMER-GLASS
				</Link>
			</Card>

			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<Card className="hidden h-auto w-full grow rounded-md  md:block"></Card>
				<form>
					<Button
						variant={'outline'}
						className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3"
					>
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</Button>
				</form>
			</div>
		</div>
	);
}
