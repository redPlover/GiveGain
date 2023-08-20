import Navbar from '../components/header.js';
import '../globals.css'
import '../navbar.css'

export const metadata = {
    title: 'Recruit - GiveGain',
    description: 'Recruitment page for GiveGain',
}

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>

                <Navbar />

                {children}
            </body>
        </html>
    )
}
