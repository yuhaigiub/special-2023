import prisma from "@/lib/db/prisma";
import {NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import {env} from "@/lib/env";
import NextAuth from "next-auth/next";

export const nextAuthOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		session({session, user}) {
			session.user.id = user.id;
			return session;
		},
	},
};

const handler = NextAuth(nextAuthOptions);

export {handler as GET, handler as POST};
