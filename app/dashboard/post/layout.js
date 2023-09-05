import { SessionProvider } from "next-auth/react";

export const metadata = {
    title: 'Post - GiveGain',
    description: 'Posting page for GiveGain',
}

export default async function RootLayout({ children }) {

    return (
        <SessionProvider>
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
        </SessionProvider>
    )
}
