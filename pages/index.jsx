import Link from 'next/link';
import { useState } from 'react';
import { getStates, totalResources } from '@lib/api';
import { humanize, parametreize } from '@lib/utils';
import Tabs from '@components/Tabs';
import Logo from '@components/Logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Selector from '@components/Selector';
import { tabsInfo } from '@lib/tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMedkit, faBuilding } from '@fortawesome/free-solid-svg-icons';
import hospitalCareCenterData from '@data/hospital_clinic_centre.json';
import ambulanceData from '@data/ambulance.json';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
import SearchField from '@components/search/SearchField';

let updateFilter = (setSelectedFilter, selection) => setSelectedFilter(selection);

export default function Home() {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');

    let tabsInfoNew = [];
    tabsInfo.forEach((tab) => {
        const { icon, link, color, value } = tab;
        tabsInfoNew.push({
            color,
            link,
            value,
            icon,
            name: t[tab.name.toLowerCase()]
        });
    });
    const [isToShowSuggestion, setIsToShowSuggestion] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState('all');
    return (
        <div>
            <section className="flex max-w-5xl mx-auto flex-col items-center mt-5">
                {
                    !isToShowSuggestion &&
                    <div className="mt-5 flex flex-col items-center">
                        <Logo width={100} />
                        <h1 className="mt-1 font-black text-6xl text-gray-900 dark:text-gray-100">
                            {t.title}
                        </h1>
                        <h2 className="mt-4 font-semibold text-xl text-gray-900 dark:text-gray-100 text-center">
                            {t.description}
                        </h2>
                    </div>
                }
                <div className="mt-4 ">
                    <span className="font-semibold">
                        <span>Search over </span>
                        {totalResources()}
                        <span>+ resources!</span>
                    </span>
                </div>
                <div className="w-full md:w-3/4 px-2">
                    <SearchField isFocus={isToShowSuggestion} onFocus={setIsToShowSuggestion} />
                </div>
                <div className="flex flex-wrap items-center  justify-evenly mt-6 ">
                    {selectedFilter === 'vaccine' ? (
                        <div className="inline-flex items-center px-4 py-3 border border-transparent shadow-sm text-lg leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white mb-4">
                            Coming Soon!
                        </div>
                    ) : (
                        getStates(selectedFilter).map((s) => {
                            return (
                                <Link key={s} href={`[state]`} as={`${parametreize(s)}`}>
                                    <span className="p-2 text-sm md:text-md font-normal cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-gray-50 h-10">
                                        {humanize(s)}
                                    </span>
                                </Link>
                            );
                        })
                    )}
                </div>
                <div className="flex space-x-3">
                    <a href="https://www.covid19india.org/">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-6">
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
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-6">
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
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-6">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-4"
                                title="FDA Officers Contact"
                                icon={faBuilding}
                            />
                            {t.fdaOfficerContact}
                        </button>
                    </a>
                    {/* <a href="/oxygen_requirements">
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white hover:opacity-60 focus:outline-none mt-6">
                            <FontAwesomeIcon
                                className="text-white-400 w-4 mr-4"
                                title="Covid 19 Statistics"
                                icon={faMedkit}
                            />
                            {t.oxygenRequirements}
                        </button>
                    </a> */}
                </div>
                <div className="flex space-x-3">
                    <div className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white  mt-6">
                        <FontAwesomeIcon
                            className="text-white-400 w-4 mr-4"
                            title="Covid 19 Statistics"
                            icon={faMedkit}
                        />
                        {t.totalHospitals} : {Object.keys(hospitalCareCenterData.data).length} ({' '}
                        {t.verified} :
                        {
                            hospitalCareCenterData.data.filter((value) =>
                                value.verificationStatus
                                    ? value.verificationStatus.toLocaleLowerCase() ===
                                    'available and verified'
                                    : ''
                            ).length
                        }
                        ) | {t.totalAmbulace} : {Object.keys(ambulanceData.data).length} ({' '}
                        {t.verified} :
                        {
                            ambulanceData.data.filter((value) =>
                                value.verificationStatus
                                    ? value.verificationStatus
                                        .toLocaleLowerCase()
                                        .includes('verified')
                                    : ''
                            ).length
                        }
                        )
                    </div>
                </div>
            </section>
        </div>
    );
}
