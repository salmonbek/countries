import Layout from '../components/Layout'
import ThemeContextProvider from '../context/ThemeContextProvider'
import SearchContextProvider from '@/context/SearchContextProvider';
import  '../styles/css/styles.css';
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
      <SearchContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
      </ThemeContextProvider>
    </>
  )
}
