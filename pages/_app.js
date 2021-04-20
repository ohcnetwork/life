import MainLayout from '../layouts/MainLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, children }) {
  return (
    <MainLayout>
      <Component {...pageProps}></Component>
    </MainLayout>
  );
}

export default MyApp;
