import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '300',
    subsets: ['latin']
})

export const metadata = {
    title: 'GiveGain',
    description: 'Gain more by giving more',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    )
}
