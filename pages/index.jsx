import Link from 'next/link';
import { useState } from 'react';
import { getStates } from '@lib/api';
import { humanize, parametreize } from '@lib/utils';
import Tabs from '@components/Tabs';
import Logo from '@components/Logo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Selector from '@components/Selector';
import { tabsInfo } from '@lib/tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMedkit } from '@fortawesome/free-solid-svg-icons';
import hospitalCareCenterData from '@data/hospital_clinic_centre.json';
import ambulanceData from '@data/ambulance.json';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';

let updateFilter = (setSelectedFilter, selection) => setSelectedFilter(selection);

export default function Home() {
    const { locale } = useLocaleContext();
    const t = useLocale(locale).home;
    const t_shared = useLocale('en').home;

    let tabsInfoNew = [];
    tabsInfo.forEach((tab) => {
        const { icon, link, color, value } = tab;
        tabsInfoNew.push({
            color,
            link,
            value,
            icon,
            name: t[tab.name.toLowerCase()] ?? t_shared[tab.name.toLowerCase()]
        });
    });

    const [selectedFilter, setSelectedFilter] = useState('all');
    return (
        <div>
            <section className="flex flex-col items-center mt-12">
                <Logo width={100} />
                <h1 className="mt-1 font-black text-6xl text-gray-900 dark:text-gray-100">
                    {t.title}
                </h1>
                <h2 className="mt-4 font-semibold text-xl text-gray-900 dark:text-gray-100 text-center">
                    {t.description}
                </h2>
                <div className="mt-4 ">
                    <Tabs
                        tabsInfo={tabsInfoNew}
                        selectedFilter={selectedFilter}
                        updateFilterCB={(e) => updateFilter(setSelectedFilter, e)}
                    />
                </div>
                <div className="w-full md:w-3/4 px-2">
                    <Selector
                        localeState={t.state}
                        localeDistrict={t.district}
                        placeholder={t.searchPlaceholder}
                        page={selectedFilter}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-evenly mt-6 ">
                    {selectedFilter === 'vaccine' ? (
                        <div className="inline-flex items-center px-4 py-3 border border-transparent shadow-sm text-lg leading-4 font-medium rounded-md dark:text-white text-black dark:bg-gray-1000 bg-white mb-4">
                            Coming Soon!
                        </div>
                    ) : (
                        getStates(selectedFilter).map((s) => {
                            return (
                                <Link key={s} href={`[state]`} as={`${parametreize(s)}`}>
                                    <span className="p-2 text-sm md:text-md font-normal cursor-pointer hover:text-gray-900 text-gray-600 dark:hover:text-gray-50">
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
                    <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7nP0QvIvm5VDEbVDG0ELECYS446P-MgLwdX_elDrYbkN39g_o90wmJIMcazmcLH38Snn7rSqwAS_y/pubhtml?gid=972869835&single=true">
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
                                    ? value.verificationStatus.toLocaleLowerCase() == 'verified'
                                    : ''
                            ).length
                        }
                        ) | {t.totalAmbulace} : {Object.keys(ambulanceData.data).length} ({' '}
                        {t.verified} :
                        {
                            ambulanceData.data.filter((value) =>
                                value.verificationStatus
                                    ? value.verificationStatus.toLocaleLowerCase() == 'verified'
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
