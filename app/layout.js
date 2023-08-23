import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LoanX',
  description: 'Personal Loan App to log X clients',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='grid grid-cols-12 h-screen w-full bg-white'>
          <div className='col-span-2'>
            <Navbar />
          </div>
          <div className='col-span-10'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
