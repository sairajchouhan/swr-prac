import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (config: AxiosRequestConfig) => axios(config),
        // By adding `onErrorRetry` as below,I avoid retrying if the api request resutls in 404
        // but I loose exponential backoff algorithm for every request from now
        onErrorRetry: (err) => {
          if (err.response.status === 404) return;
        }
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
export default MyApp;
