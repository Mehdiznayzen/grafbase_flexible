import { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import { Footer, Navbar } from '@/components'

export const metadata:Metadata = {
    title : 'Flexible',
    description : 'Showcase and discover remarable developer projects.'
}

export default function RootLayout({ children } : { children : React.ReactNode}) {
    return (
        <html lang='en'>
            <Head>
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <body>
                <Navbar />
                <main>
                    { children }
                </main>
                <Footer/>
            </body>
        </html>
    )
}