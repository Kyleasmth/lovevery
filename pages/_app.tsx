import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import playKitsPage from './playkits'

export default function App({ Component, pageProps }: AppProps) {
  return (<Component {...pageProps} />)
}
