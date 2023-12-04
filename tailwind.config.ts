import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'work': ['var(--work-font)', 'sans-serif'],
        'monument': ['var(--monument-font)', 'sans-serif'],
        'toogle': ['var(--toogle-font)', 'sans-serif'],
      },
      colors: {
        ctz:{
          light: '#FFFFFF',
          dark: '#1E1E1E',
          yellow: {
            light: '#FFF3B2',
            medium: '#FFD801',
          },
          orange: {
            light: '#FDB615',
            semi_light: '#FCA022',
            medium: '#FB8B2F',
            semi_dark: '#FA743D',
            dark: '#F96049'
          },
          gray: {
            aaultra_light: '#F1F1F1',
            aultra_light: '#F3F3F3',
            light: '#ECEFF4',
            medium: '#BABCC9',
            semi_dark: '#252525',
            dark: '#292929',
          },
          pink: {
            light: '#FC9D5B',
            medium: '#FB7A92',
          }
        }
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}
export default config
