import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import React from 'react';
import Header from '@components/Header';

const Disclaimer = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'about');

    return (
        <section className="max-w-5xl mx-auto px-2 dark:text-gray-100 text-gray-1000">
            <Breadcumb list={[{ href: null, name: t.q11 }]} />
            <Header title={t.q11} />
            <section className="flex flex-col mx-2 md:mx-6 pt-2 pl-4">
                <p>
                    {t.a112}
                    {` `}
                    {
                        <a
                            className="text-indigo-500 font-semibold mt-2 text-md"
                            href="https://liferesources.in/"
                            target="_blank">
                            https://liferesources.in/
                        </a>
                    }
                    {` `}
                    {t.a113}
                </p>
                <br />
                <p>{t.a114}</p>
            </section>
        </section>
    );
};

export default Disclaimer;
