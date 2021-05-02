import React from 'react';

import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import { NextSeo } from 'next-seo';

const languages = [
    {
        id: 1,
        name: 'English',
        logoUrl: 'icons/english-icon.png',
        color: 'border-red-500 bg-red-100',
        title: 'English',
        description:
            'A verified crowd-sourced guide to staying safe in Coronavirus disease (COVID-19) outbreak.',
        link: 'https://coronasafe.in/'
    },
    {
        id: 2,
        name: 'Quiz',
        logoUrl: 'icons/quiz-icon.png',
        color: 'border-blue-500 bg-blue-100',
        description:
            'WHO Quiz on COVID-19. Currently the questions are available in english, malayalam, urdu, kannada and french.',
        link: 'https://quiz.coronasafe.in/'
    },
    {
        id: 3,
        name: 'മലയാളം',
        logoUrl: 'icons/malayalam-icon.png',
        color: 'border-green-500 bg-green-100',
        description: 'കൊറോണ വൈറസ് രോഗം Covid 19 പടരുന്നതിനാൽ സുരക്ഷിതമായി തുടരാനുള്ള വഴികാട്ടി',
        link: 'https://ml.coronasafe.in/'
    },
    {
        id: 4,
        name: 'हिन्दी',
        logoUrl: 'icons/hindi-icon.png',
        color: 'border-yellow-500 bg-yellow-100',
        description: 'कोरोनोवायरस बीमारी में सुरक्षित रहने के लिए एक सत्यापित भीड़-खट्टा गाइड',
        link: 'https://hindi.coronasafe.in/'
    },

    {
        id: 5,
        name: 'ಕನ್ನಡ',
        logoUrl: 'icons/kannada-icon.png',
        color: 'border-indigo-500 bg-indigo-100',
        description:
            'ಕರೋನಾ ವೈರಸ್ನಿಂದ(COVID-19) ಸುರಕ್ಷಿತವಾಗಿರಲು ಪರಿಶೀಲಿಸಲ್ಪಟ್ಟ ಕ್ರೌಡ್-ಸೋರ್ಸ್ಡ್ ಗೈಡ್.',
        link: 'https://kannada.coronasafe.in/'
    },
    {
        id: 6,
        name: 'తెలుగు',
        logoUrl: 'icons/telugu-icon.png',
        color: 'border-blue-500 bg-blue-100',
        description: 'కరోనావైరస్ (COVID-19) నుంచి సురక్షితంగా ఉండటానికి సలహాలు, సూచనలు.',
        link: 'https://telugu.coronasafe.network/'
    },
    {
        id: 7,
        name: 'தமிழ்',
        logoUrl: 'icons/tamil-icon.png',
        color: 'border-yellow-500 bg-yellow-100',
        description:
            'கொரோனா வைரஸ் நோய் (COVID-19) சமூக கூட்டத்தின் வாயிலாக பரவுவதில் இருந்து பாதுகாத்து கொள்ள உருவாக்கப்பட்ட வழிகாட்டி.',
        link: 'https://tamil.coronasafe.network/'
    },
    {
        id: 7,
        name: 'मराठी',
        logoUrl: 'icons/marathi-icon.png',
        color: 'border-purple-500 bg-purple-100',
        description:
            ' कोरोनाव्हायरस रोग प्रादुर्भावात सुरक्षित राहण्यासाठी एक सत्यापित सार्वजनिकरित्या-स्त्रोत मार्गदर्शक',
        link: 'https://marathi.coronasafe.network/'
    }
];

const renderLanguageElement = (data) => (
    <a
        href={data.link}
        target="_blank"
        className="w-full md:w-1/2 py-4 md:p-4"
        key={data.name}
        rel="noopener">
        <div
            className={
                'flex border-2 rounded-lg px-4 py-6 md:p-4 shadow-md hover:shadow-xl hover:bg-white h-64 md:h-64 lg:h-64 ' +
                data.color
            }>
            <div className="w-1/4 md:w-1.8/6 flex h-full">
                <img
                    src={data.logoUrl}
                    className="lg:w-full mt-auto mb-auto pt-auto pb-auto"
                    title={data.name}
                    alt={data.name}></img>
            </div>
            <div className="w-3/4 md:w-4/6 pl-2 flex">
                <div className="mb-auto mt-auto">
                    <h3 className="font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl pb-1 md:pb-2 leading-tight">
                        {data.name}
                    </h3>
                    <p className="text-base md:text-lg">{data.description}</p>
                </div>
            </div>
        </div>
    </a>
);

const Learn = () => {
    const SEO = {
        title: `Learn | Coronsafe Network`,
        openGraph: {
            title: `Learn | Coronsafe Network`
        }
    };
    return (
        <React.Fragment>
            <NextSeo {...SEO} />
            <div className="font-bold max-w-5xl mx-auto px-2">
                <Breadcumb list={[{ href: null, name: 'Learn' }]} />
                <Header title="Learn" />
                <div className="flex flex-wrap  items-center justify-center w-full my-4">
                    {languages.map((l) => renderLanguageElement(l))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Learn;
