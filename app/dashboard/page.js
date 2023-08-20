import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route.jsx";

import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default async function post() {
    const session = await getServerSession(authOptions);
    // const { data: session, status } = useSession();

    // if(status === 'loading') return <div>Loading...</div>

    // if(status === 'unauthenticated') redirect('/api/auth/signin');

    return (
        <div className="flex flex-col h-screen">
            {JSON.stringify(session)}
            Hi
        </div>
    )
};
