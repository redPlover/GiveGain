import '../globals.css'
import '../navbar.css'
import { Roboto } from 'next/font/google'
import Link from 'next/link';
import Image from 'next/image'
import Logo from 'public/logo.png';

const Navbar = () => {
    return (
        <div className='flex flex-row bg-gray-200 font-extralight sm:text-sm md:text-md lg:text-lg xl:text-lg text-gray-950 m-4 h-10 rounded-lg origin-center place-content-center'>
            <Link href="/posts" className='flex items-center p-2 lg:w-24 xl:w-24 border border-transparent border-5 rounded-lg transition ease-in-out text-center hover:text-blue-400'>
                Volunteer
            </Link>
            <Link href="/recruit" className='flex items-center p-2 lg:w-24 xl:w-24 border border-transparent border-5 rounded-lg transition ease-in-out text-center font-bold text-blue-600 hover:text-blue-400'>
                Recruit
            </Link>

            <Link href="/"><Image src={Logo} alt="Logo" className='transition ease-in-out hover:contrast-50 object-scale-down h-10 w-10 ring ring-green-400 rounded-full' /></Link>

            <Link href="/help" className='flex items-center p-2 lg:w-24 xl:w-24 border border-transparent border-5 rounded-lg transition ease-in-out text-center hover:text-blue-400'>
                Help
            </Link>
            <Link href="/about" className='flex items-center p-2 lg:w-24 xl:w-24 border border-transparent border-5 rounded-lg transition ease-in-out text-center hover:text-blue-400'>
                About
            </Link>
        </div>
    );
};

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
