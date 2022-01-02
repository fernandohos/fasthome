import type { AppProps } from 'next/app';
import { GlobalStyle } from '../app/styles/global';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp
