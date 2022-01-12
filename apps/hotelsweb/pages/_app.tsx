import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider } from 'react-redux'
import { rootStore } from '@aster-daily-horoscope/store'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootStore}>
      <Head>
        <title>Welcome to hotelsweb!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default CustomApp;
