import './globals.scss'
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Sulaman Asghar',
  description: 'I developed this web with Next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {children}
      </body>
    </html>
  )
}
