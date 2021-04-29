import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import React from 'react';
const Disclaimer = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'about');

    return (
        <section className="max-w-5xl mx-auto px-2 dark:text-gray-100 text-gray-1000">
            <div className="pt-10">
                <Breadcumb list={[{ href: null, name: t.q11 }]} />
            </div>
            <h1 className="text-3xl mt-10 font-bold">{t.q11}</h1>
            <section className="py-3 flex flex-col space-y-2">
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
                <p>{t.a114}</p>
            </section>
        </section>
    );
};

export default Disclaimer;
