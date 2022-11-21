import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import Head from './head'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className='h-screen flex flex-col items-center'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
