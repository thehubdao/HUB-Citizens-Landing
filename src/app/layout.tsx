import type { Metadata, Viewport } from 'next';
import { Work_Sans } from 'next/font/google';
import Monument_Font from 'next/font/local';
import ToogleIcons from 'next/font/local';
import './globals.css';

const workSans = Work_Sans({ subsets: ['latin'], display: 'block', variable: '--work-font'});
const MonumentFont = Monument_Font({src: '../../public/fonts/MonumentExtended-Ultrabold.otf', display: 'block', variable: '--monument-font'});
const toogleIcons = ToogleIcons({src: '../../public/fonts/icomoon-toogle-x.ttf', display: 'block',  variable: '--toogle-font'});

export const metadata: Metadata = {
  title: 'The Citizens Portal',
  description: 'Web 3.0 Oriented avatar suite: Create unique interoperable game assets and unleash your creativity.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${MonumentFont.className} ${MonumentFont.variable}  ${toogleIcons.variable} overflow-x-hidden`}>
      <body>
        {children}
        </body>
    </html>
  )
}
