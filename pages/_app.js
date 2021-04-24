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
                <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.coronasafe.network/life/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.coronasafe.network/life/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.coronasafe.network/life/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="https://cdn.coronasafe.network/life/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps}></Component>
        </MainLayout>
    );
}

export default MyApp;
