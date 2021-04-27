import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import React from 'react';
const Disclaimer = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale).about;

    return (
        <section className="">
            <div className="pt-10">
                <Breadcumb list={[{ href: null, name: t.q11 }]} />
            </div>
            <h1 className="text-3xl font-bold">{t.q11}</h1>
            <section className="py-3 flex flex-col space-y-2">
                <p>
                    {t.a112}
                    {
                        <a
                            className="text-indigo-600 font-semibold dark:text-gray-600 mt-2 text-md"
                            href="https://liferesources.in/"
                            target="_blank">
                            https://liferesources.in/
                                    </a>
                    }
                    {t.a113}
                </p>
                <p>{t.a114}</p>
            </section>
        </section>
    );
}

export default Disclaimer;