import React from 'react';
import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';

const Index = () => {
    const aClass = `underline hover:opacity-80 my-2 text-lg dark:text-gray-500`;
    const spanClass = `font-medium`;
    const data = [
        {
            link:
                'https://github.com/coronasafe/life/wiki/Life-Data-Structure#sample-output-from-the-master-database',
            text: 'Sample data'
        },
        {
            link: 'https://github.com/coronasafe/life ',
            text: 'Data APIs for people making front-ends from consolidated data'
        },
        {
            link: 'https://www.loom.com/share/25d3607a99d748d6940ebc10b6acb23f',
            text: 'Instructions for how to integrate data'
        }
    ];
    return (
        <section className="max-w-5xl mx-auto px-2">
            <Breadcumb list={[{ href: null, name: 'How to Integrate Data' }]} />
            <Header title="How to Integrate Data" />
            <div className="flex flex-col mx-2 md:mx-6 pt-2 pl-4">
                {data.map((d, i) => (
                    <a key={d.text} className={aClass} href={d.link}>
                        <p>
                            <span>{i + 1}. </span>
                            <span className={spanClass}>{d.text}</span>
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Index;
