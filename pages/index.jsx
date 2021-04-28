import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch, faAngleDown, faMedkit } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useLocaleContext } from '@hooks/use-locale-context';
import { useRouter } from 'next/router';
import {
    getAmbulances,
    getOxygen,
    getVaccine,
    helplineByDistrict,
    hospitalByDistrict,
    medicineByDistrict,
    statesAndDistrict
} from '@lib/api';
import { parametreize } from '@lib/utils';
import SearchResult from '@components/SearchResult';
import Link from 'next/link';
import StartSearching from '@components/StartSearching';
import TwitterContainer from '@components/TwitterContainer';
import districtMapCity from '@data/map_dis_to_city';

export default function Home({ state, district, type }) {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');
    const router = useRouter();

    const statesWithDistricts = statesAndDistrict();
    const [tabVal, setTabVal] = useState('result');
    const changeTabs = (v) => setTabVal(v);

    const states = Object.keys(statesWithDistricts);
    state = states.find((e) => e.toLowerCase() === state?.toLowerCase());

    const [stateChoosen, setStateChoosen] = useState(state || states[0]);

    const districts = statesWithDistricts[stateChoosen];
    district = districts.find((e) => e.toLowerCase() === district?.toLowerCase());

    const [districtChoosen, setDistrictChoosen] = useState(district || districts[0]);

    const mapDisToCity = (s) => {
        // checks if it exists
        // maps "North Delhi" -> "Delhi"
        const temp = districtMapCity[s];

        if (temp === undefined) {
            return s;
        } else {
            return temp;
        }
    };

    const [resourceChoosen, setResourceChoosen] = useState(type || 'Oxygen');

    const resources = {
        Oxygen: getOxygen(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Medicine: medicineByDistrict(
            parametreize(stateChoosen),
            parametreize(districtChoosen),
            true
        ),
        Hospital: hospitalByDistrict(
            parametreize(stateChoosen),
            parametreize(districtChoosen),
            true
        ),
        Ambulance: getAmbulances(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Helpline: helplineByDistrict(
            parametreize(stateChoosen),
            parametreize(districtChoosen),
            true
        ),
        Vaccine: getVaccine(parametreize(stateChoosen), parametreize(districtChoosen), true)
    };

    const handleChooseState = (s) => {
        setStateChoosen(s);
        const newDistrict = statesWithDistricts[s][0];
        setDistrictChoosen(newDistrict);
        router.push(
            `/${parametreize(s)}/${parametreize(newDistrict)}/${parametreize(resourceChoosen)}`
        );
    };

    const handleDistrictChange = (d) => {
        setDistrictChoosen(d);
        router.push(
            `/${parametreize(stateChoosen)}/${parametreize(d)}/${parametreize(resourceChoosen)}`
        );
    };

    const handleResourceChange = (v) => {
        router.push(
            `/${parametreize(stateChoosen)}/${parametreize(districtChoosen)}/${parametreize(v)}`
        );
        setResourceChoosen(v);
    };

    return (
        <section className="max-w-7xl mx-auto px-2">
            <div className="bg-gray-200 dark:bg-gray-1200 text-center pt-5 pb-20">
                <h1 className="font-semibold text-xl dark:text-gray-300">{t.description}</h1>
            </div>
            <div className="-mt-12">
                <section className="bg-white dark:bg-gray-1300 rounded-lg mx-12 p-5 shadow-lg flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                        <label htmlFor="state" className="text-sm">
                            {t.select} {t.state}{' '}
                        </label>
                        <div className="flex items-center relative">
                            <select
                                id="state"
                                value={stateChoosen}
                                onChange={({ target: { value } }) => handleChooseState(value)}
                                className="py-2 w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none pr-3 cursor-pointer z-10">
                                {states.map((s, id) => (
                                    <option
                                        className="dark:text-gray-900 overflow-ellipsis"
                                        key={id}
                                        value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-1.5">
                                <FontAwesomeIcon icon={faAngleDown} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-1000 h-1 transform rotate-90 w-12 my-2 hidden md:block" />
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                        <label htmlFor="district" className="text-sm">
                            {t.select} {t.district}{' '}
                        </label>
                        <div className="flex items-center relative">
                            <select
                                id="district"
                                value={districtChoosen}
                                onChange={({ target: { value } }) => handleDistrictChange(value)}
                                className="py-2  w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none pr-3 cursor-pointer z-10">
                                {districts.map((s, id) => (
                                    <option className="dark:text-gray-900" key={id} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-1.5">
                                <FontAwesomeIcon icon={faAngleDown} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-1000 h-1 transform rotate-90 w-12 my-2 hidden md:block " />
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200 ">
                        <label htmlFor="resource" className="text-sm">
                            {t.selectResource}
                        </label>
                        <div className="flex items-center relative">
                            <select
                                id="resource"
                                value={resourceChoosen}
                                onChange={({ target: { value } }) => handleResourceChange(value)}
                                className="py-2 w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none pr-3 cursor-pointer z-10">
                                {Object.keys(resources).map((s, id) => (
                                    <option className="dark:text-gray-900" key={id} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-1.5">
                                <FontAwesomeIcon icon={faAngleDown} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-0 md:ml-6 w-full md:w-min">
                        <Link
                            href={`/${parametreize(stateChoosen)}/${parametreize(
                                districtChoosen
                            )}/${parametreize(resourceChoosen)}`}>
                            <button className="bg-indigo-600 hover:bg-indigo-700 w-full md:w-14 h-16 rounded-md cursor-pointer text-gray-200 flex justify-center items-center">
                                <span>
                                    <FontAwesomeIcon icon={faSearch} className="w-5" />
                                </span>
                                <span className="md:hidden ml-2">Search</span>
                            </button>
                        </Link>
                    </div>
                </section>
                {type ? (
                    <>
                        <div className="dark:text-gray-200 mx-auto max-w-xs text-base flex font-bold justify-around my-5 cursor-pointer">
                            <div
                                className={`w-3/6 flex justify-center items-center pb-2  ${
                                    tabVal === 'result'
                                        ? `border-b-2 border-gray-900 dark:border-gray-300`
                                        : ``
                                }`}
                                onClick={() => changeTabs('result')}>
                                <FontAwesomeIcon
                                    className="text-gray-900 dark:text-gray-300 mr-2"
                                    title="Supplies"
                                    icon={faMedkit}
                                />
                                Results
                            </div>
                            <div
                                className={`w-3/6 flex justify-center items-center pb-2  ${
                                    tabVal === 'twitter'
                                        ? `border-b-2 border-gray-900 dark:border-gray-300`
                                        : ``
                                }`}
                                onClick={() => changeTabs('twitter')}>
                                <FontAwesomeIcon
                                    className="text-blue-500 mr-2"
                                    title="Share on Twitter"
                                    icon={faTwitter}
                                />
                                Twitter Results
                            </div>
                        </div>
                        {tabVal === 'result' && (
                            <SearchResult type={type} resources={resources[type]} />
                        )}
                        {tabVal === 'twitter' && (
                            <TwitterContainer searchStr={mapDisToCity(districtChoosen)} />
                        )}
                    </>
                ) : (
                    <StartSearching text={t.startSearchingAmong} res={t.resources} />
                )}
            </div>
        </section>
    );
}
