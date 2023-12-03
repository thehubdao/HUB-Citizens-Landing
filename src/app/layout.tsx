import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import Monument_Font from 'next/font/local';
import ToogleIcons from 'next/font/local';
import './globals.css';
import { ProviderRedux } from '@/redux/ui/provider.redux';
import GetDataRedux from '@/redux/ui/getData.redux';

const workSans = Work_Sans({ subsets: ['latin'], display: 'block', variable: '--work-font' });
const MonumentFont = Monument_Font({ src: '../../public/fonts/MonumentExtended-Ultrabold.otf', display: 'block', variable: '--monument-font' });
const toogleIcons = ToogleIcons({ src: '../../public/fonts/icomoon-toogle-x.ttf', display: 'block', variable: '--toogle-font' });

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
    <html lang="en" className={`${workSans.variable} ${MonumentFont.className} ${MonumentFont.variable}  ${toogleIcons.variable} overflow-x-hidden`}>
      <ProviderRedux>
        <GetDataRedux>
          <body>
            {children}
          </body>
        </GetDataRedux>
      </ProviderRedux>
    </html>
  )
}
