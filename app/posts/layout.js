import Navbar from '../components/header.js';
import '../globals.css'
import '../navbar.css'

export const metadata = {
    title: 'Posts - GiveGain',
    description: 'Posts on GiveGain',
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
