import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Monument_Font from 'next/font/local';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], display: 'block', variable: '--work-font'});
const MonumentFont = Monument_Font({src: '../../public/fonts/MonumentExtended-Ultrabold.otf', display: 'block', variable: '--monument-font'});

export const metadata: Metadata = {
  title: 'The Hub Citizens',
  description: 'Weeb 3.0 Oriented avatar suite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${MonumentFont.className} ${MonumentFont.variable} overflow-x-hidden`}>
      <body>
        {children}
        </body>
    </html>
  )
}
