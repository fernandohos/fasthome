import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@styles/global';
import type { NextPage } from 'next';
import { AuthProvider } from '@hooks/useAuth';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </AuthProvider>
  );
}

export default MyApp
