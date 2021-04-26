import React from 'react';
import Breadcumb from '@components/Breadcumb';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

const About = () => {
    const { locale } = useLocaleContext();
    const t = useLocale(locale).about;

    const h1Class = `text-4xl`;
    const h2Class = `text-xl mt-5`;
    const pClass = `text-blue-500 mt-2 text-md`;
    const aClass = `underline text-primary-600 hover:text-primary-800 visited:text-purple-600`;
    return (
        <>
            <div className="pt-10">
                <Breadcumb list={[{ href: null, name: 'About' }]} />
            </div>

            <div className="py-10 dark:text-gray-500 text-gray-900 dark font-bold px-2">
                <AboutQA question="Who are you?" answer="I am me" />
                <h1 className={h1Class}>{t.head}</h1>
                <h2 className={h2Class}>{t.q1}</h2>
                <p className={pClass}>{t.a1}</p>
                <h2 className={h2Class}>{t.q2} </h2>
                <p className={pClass}>{t.a21}</p>
                <p className={pClass}>
                    {t.a22}
                    <a className={aClass} href="https://life-api.coronasafe.network/">
                        life-api.coronasafe.network
                    </a>{' '}
                    {t.a23}
                </p>
                <h2 className={h2Class}>{t.q3}</h2>
                <p className={pClass}>
                    {t.a31}
                    <a className={aClass} href="https://life-api.coronasafe.network/">
                        {' '}
                        API
                    </a>
                </p>
                <p className={pClass}>
                    {t.a32}
                    <a className={aClass} href="https://github.com/coronasafe/life/">
                        Github
                    </a>{' '}
                    {t.a33}
                </p>
                <h2 className={h2Class}>{t.q4}</h2>
                <p className={pClass}>{t.a4}</p>
                <h2 className={h2Class}>{t.q5}</h2>
                <p className={pClass}>{t.a5}</p>
                <h2 className={h2Class}>{t.q6}</h2>
                <p className={pClass}>{t.a6}</p>
                <h2 className={h2Class}>{t.q7}</h2>
                <p className={pClass}>
                    <a className={aClass} href="https://youtu.be/PMEhgHdmRkQ">
                        Our tutorial on how to help us on airtable
                    </a>
                    {t.a7}
                </p>
                <p className="mt-2">
                    <a className={aClass} href="https://chat.suraksha.network/">
                        Join our Slack
                    </a>
                </p>
                <h2 className={h2Class}>{t.q8}</h2>
                <p className={pClass}>
                    <a
                        className={aClass}
                        href="https://www.instagram.com/p/CN-6uNIBa7q/?igshid=1x1hs3m8omw9f">
                        {t.a8}
                    </a>
                </p>
                <h2 className={h2Class}>{t.q9}</h2>
                <p className={pClass}>
                    {t.a9}
                    <a className={aClass} href="mailto:simran@covidfyi.in">
                        {' '}
                        simran@covidfyi.in
                    </a>{' '}
                    {t.a91}
                </p>
                <h2 className={h2Class} id="partner">
                    {t.q10}
                </h2>
                <p className={pClass}>{t.a10}</p>
                {
                    <a className={aClass} href="/partners">
                        Current Partners
                    </a>
                }
                <h2 className={h2Class} id="disclaimer">
                    {t.q11}
                </h2>

                <p className={pClass}>
                    {t.a112}
                    {
                        <a className={aClass} href="https://liferesources.in/" target="_blank">
                            https://liferesources.in/
                        </a>
                    }
                    {t.a113}
                </p>
                <p className={pClass}>{t.a114}</p>
            </div>
        </>
    );
};

export default About;
