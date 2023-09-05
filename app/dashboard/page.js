import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route.jsx";

import { redirect } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getUsers() {
    const res = await fetch(`${process.env.BASE_URL}/api/user`, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) {
        console.error(res.status);
    }
    return res.json();
}

async function getPosts() {
    const res = await fetch(`${process.env.BASE_URL}/api/posts`, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) {
        console.error(res.status);
    }
    return res.json();
}

export default async function post() {
    const user = await getUsers();
    const posts = await getPosts();

    const session = await getServerSession(authOptions);
    const status = session ? "authenticated" : "unauthenticated";

    if(status === 'unauthenticated') redirect('/api/auth/signin');

    return (
        <div className="flex flex-col h-screen">
            <pre>{JSON.stringify(session)}</pre>
            {posts.filter((item) => item.user.username == session.user.username).map((item, index) => (<p>Hi</p>))}
            <Link href="/dashboard/post">Post</Link>
            <Link href="/api/auth/signout">Logout</Link>
        </div>
    )
};
