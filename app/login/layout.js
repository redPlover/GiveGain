import '../globals.css'

export const metadata = {
    title: 'Login - GiveGain',
    description: 'Login page for GiveGain',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
