import { Provider } from 'react-redux';
import store from '../redux/ReduxStore';
import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header></Header>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;