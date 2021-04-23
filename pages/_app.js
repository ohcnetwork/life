import MainLayout from '../layouts/MainLayout';
import '../styles/globals.css';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <DefaultSeo {...SEO} />
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps}></Component>
    </MainLayout>
  );
}

export default MyApp;
