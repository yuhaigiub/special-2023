import Link from "next/link";
import NavbarRight from "./NavbarRight";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

const Navbar = async () => {
	const session = await getServerSession(nextAuthOptions);

	return (
		<div className="w-full flex justify-between items-center py-5">
			<div className="flex-1">
				<Link href="/feed" className="pink_gradient font-extrabold text-2xl">
					Smol
				</Link>
			</div>
			<NavbarRight session={session} />
		</div>
	);
};
export default Navbar;
