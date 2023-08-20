import Navbar from '../../components/header.js';
import '../../globals.css'
import '../../navbar.css'

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
