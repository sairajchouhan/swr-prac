import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (config: AxiosRequestConfig) => axios(config),
        onErrorRetry: (err) => {
          if (err.response.status === 404) return
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
export default MyApp
