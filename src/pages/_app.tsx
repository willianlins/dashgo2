import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools} from 'react-query/devtools';
import { theme } from '../styles/theme';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SidebarDrawerProvider } from '../context/ContextDraweContext';
import { makeServer } from '../services/miragejs';
import { queryClient } from '../services/queryClinte';



if (process.env.NODE_ENV === 'development') {
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
