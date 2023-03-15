import './globals.css'
import { Montserrat  } from 'next/font/google'

const montserrat = Montserrat({
  weight:["400", "700"],
  subsets:["latin"]
})
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body className={montserrat.className}>
      <nav>
          <h1>LOGO</h1>
          <ul className='font-montserrat'>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
         </nav>
         {children}
         </body>
    </html>
  )
}
