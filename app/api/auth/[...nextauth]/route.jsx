import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { redirect } from "next/dist/server/api-utils";

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
                const user = {
                    id: 1,
                    username: "E",
                    password: "e"
                };
                return user;
            }
        })
    ],
    events: {
        async signIn(message) {
            redirect("/dashboard");
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};