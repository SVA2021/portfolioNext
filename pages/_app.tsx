import {LangProvider} from '@/contexts'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
  return (
    <LangProvider>
      <Component {...pageProps} />
    </LangProvider>
  )
}