import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer position="top-right"/>
    </Provider>
  );
}

export default MyApp;
