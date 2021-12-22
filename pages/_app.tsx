import type { AppProps } from 'next/app';
import { GlobalStyle } from '../app/styles/global';
import { FormProvider } from '../app/contexts/formContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
        <GlobalStyle />
        <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp
