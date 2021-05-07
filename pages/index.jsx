import Link from 'next/link';
import { useState } from 'react';
import { getAmbulances, getStates, hospitalByDistrict } from '@lib/api';
import { humanize, isVerified, parametreize } from '@lib/utils';
import Logo from '@components/Logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMedkit, faBuilding } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import SearchField from '@components/search/SearchField';
import SearchIntro from '@components/search/SearchIntro';

export default function Home() {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');

    const [resource, setResource] = useState("Oxygen");
    const [isToShowSuggestion, setIsToShowSuggestion] = useState(false);

    return (
        <div>
            <section className="flex max-w-5xl mx-auto flex-col items-center mt-5">
                <div className={"mt-5 flex flex-col items-center transition-height duration-300 " + (isToShowSuggestion ? "h-0 w-0 overflow-hidden" : "h-40")}>
                    <Logo width={100} />
                    <h1 className="mt-1 font-black text-6xl text-gray-900 dark:text-gray-100">
                        {t.title}
                    </h1>
                    <h2 className="mt-4 font-semibold text-xl text-gray-900 dark:text-gray-100 text-center">
                        {t.description}
                    </h2>
                </div>
                <div className="mt-4">
                    <SearchIntro />
                </div>
                <div className="w-full md:w-3/4 px-2">
                    <SearchField
                        resource={resource}
                        setResource={setResource}
                        isFocus={isToShowSuggestion}
                        onFocus={setIsToShowSuggestion}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-evenly mt-6 ">
                    {
                        getStates().map((s) => {
                            return (
                                <Link key={s} href={`/${parametreize(s)}?resource=${resource}`}>
                                    <span className="p-2 text-sm md:text-md font-normal cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-gray-50 h-10">
                                        {humanize(s)}
                                    </span>
                                </Link>
                            );
                        })
                    }
                </div>
                <div className="flex flex-wrap justify-around space-x-3">
                    <a href="https://www.covid19india.org/">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-3">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-4"
                                title="Covid 19 Statistics"
                                icon={faChartBar}
                            />
                            {t.covid19Stats}
                        </button>
                    </a>
                    <a href="https://charts.mongodb.com/charts-swasth-deman-data-aobsf/public/dashboards/608a951e-5a65-4419-843d-d193674b3673">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-3">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-4"
                                title="Covid 19 Statistics"
                                icon={faMedkit}
                            />
                            {t.oxygenRequirements}
                        </button>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1BEXdf68gxsYsp3Hsc0gUEPbH_wx0kSbu/edit#gid=438108583">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-3">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-4"
                                title="FDA Officers Contact"
                                icon={faBuilding}
                            />
                            {t.fdaOfficerContact}
                        </button>
                    </a>
                </div>
                <div className="mx-3 flex space-x-3">
                    <div className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white  mt-6">
                        <FontAwesomeIcon
                            className="text-white-400 w-4 mr-4"
                            title="Covid 19 Statistics"
                            icon={faMedkit}
                        />
                        <span>{t.totalHospitals} : {hospitalByDistrict().length}</span>
                        <span className="mx-1"> ({t.verified}: {hospitalByDistrict().filter(e => isVerified(e.verification_status)).length}) </span>
                        <span>| {t.totalAmbulace} : {getAmbulances().length}</span>
                        <span className="mx-1"> ({t.verified}: {getAmbulances().filter(e => isVerified(e.verification_status)).length}) </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
