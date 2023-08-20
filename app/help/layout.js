import Navbar from '../components/header.js';
import '../globals.css'
import '../navbar.css'

export const metadata = {
    title: 'Help - GiveGain',
    description: 'Help page for GiveGain',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>

                <Navbar />

                {children}
            </body>
        </html>
    )
}
