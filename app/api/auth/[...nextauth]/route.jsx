import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { redirect } from 'next/navigation';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Organization12" },
                password: { label: "Password", type: "password", placeholder: "********" }
            },
            async authorize(credentials) {
                const user = await prisma.login.findFirst({
                    where: {
                        username: credentials.username
                    }
                });

                if (!user) {
                    return null;
                }

                if (user.password !== credentials.password) {
                    return null;
                }

                return user;
            }
        })
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.user = user;
            return session;
        },
        async redirect(url, baseUrl) {
            return "/dashboard";
        },
        async jwt({ token, user }) {
            return token;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
