"use client";

import {Session} from "next-auth";
import {signIn, signOut} from "next-auth/react";
import Image from "next/image";

interface Props {
	session: Session | null;
}

const NavbarRight: React.FC<Props> = ({session}) => {
	return (
		<div className="flex gap-2 flex-none">
			{session ? (
				<>
					<button className="btn_primary px-5 py-1.5" onClick={() => signOut({callbackUrl: "/"})}>
						Sign Out
					</button>
					<Image
						src={session.user.image || "/profile-pic-placeholder.png"}
						width={36}
						height={36}
						alt="avatar"
						className="rounded-full"
					/>
				</>
			) : (
				<button className="btn_primary px-5 py-1.5" onClick={() => signIn()}>
					Sign In
				</button>
			)}
		</div>
	);
};
export default NavbarRight;
