import '../globals.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import styles from './navbar.css';

const roboto = Roboto({
    weight: '300',
    subsets: ['latin']
})

export const metadata = {
    title: 'GiveGain',
    description: 'Gain more by giving more',
}

const Navbar = () => {
    return (
        <div className={styles.navbar}>
        {/* <div className={'bg-gray-200 p-4 rounded-lg block place-content-center grid-cols-5 ${navbar}'}> */}
            <Link href="/">
                Home
            </Link>
            <Link href="/bulletin">
                Bulletin
            </Link>

            <img src="../public/next.svg" alt="Logo" />

            <Link href="/services">
                Services
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </div>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>

                <Navbar />

                {children}
            </body>
        </html>
    )
}
