import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { useLocaleContext } from '@hooks/use-locale-context';
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

export default function Home({ state, district, type }) {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');

    const statesWithDistricts = statesAndDistrict();

    const states = Object.keys(statesWithDistricts);
    state = states.find((e) => e.toLowerCase() === state?.toLowerCase());

    const [stateChoosen, setStateChoosen] = useState(state || states[0]);

    const districts = statesWithDistricts[stateChoosen];
    district = districts.find((e) => e.toLowerCase() === district?.toLowerCase());

    const [districtChoosen, setDistrictChoosen] = useState(district || districts[0]);

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

    const handleChooseState = ({ target: { value } }) => {
        setStateChoosen(value);
        const newDistrict = statesWithDistricts[value][0];
        setDistrictChoosen(newDistrict);
    };

    return (
        <section className="w-full">
            <div className="bg-gray-200 dark:bg-gray-1200 text-center pt-5 pb-20">
                <h1 className="font-semibold text-xl dark:text-gray-300">
                    Verified Crowd Sourced Emergency Services Directory
                </h1>
            </div>
            <div className="-mt-12">
                <section className="bg-white dark:bg-gray-1000 rounded-lg mx-12 p-5 shadow-lg flex flex-col md:flex-row md:items-center">
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                        <label htmlFor="state" className="text-sm">
                            Select State{' '}
                        </label>
                        <div className="flex items-center">
                            <select
                                id="state"
                                value={stateChoosen}
                                onChange={handleChooseState}
                                className="py-2 w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none pr-3">
                                {states.map((s, id) => (
                                    <option
                                        className="dark:text-gray-900 overflow-ellipsis"
                                        key={id}
                                        value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <FontAwesomeIcon
                                    className="inline"
                                    icon={faAngleDown}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900 h-1 transform rotate-90 w-12 my-2 hidden md:block" />
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                        <label htmlFor="district" className="text-sm">
                            Select District
                        </label>
                        <div className="flex items-center">
                            <select
                                id="district"
                                value={districtChoosen}
                                onChange={({ target: { value } }) => setDistrictChoosen(value)}
                                className="py-2  w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none ">
                                {districts.map((s, id) => (
                                    <option className="dark:text-gray-900" key={id} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <FontAwesomeIcon
                                    className="inline"
                                    icon={faAngleDown}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-900 h-1 transform rotate-90 w-12 my-2 hidden md:block" />
                    <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                        <label htmlFor="resource" className="text-sm">
                            Select Resource{' '}
                        </label>
                        <div className="flex items-center">
                            <select
                                id="resource"
                                value={resourceChoosen}
                                onChange={({ target: { value } }) => setResourceChoosen(value)}
                                className="py-2 w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 rounded-md my-2 appearance-none">
                                {Object.keys(resources).map((s, id) => (
                                    <option className="dark:text-gray-900" key={id} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <FontAwesomeIcon
                                    className="inline"
                                    icon={faAngleDown}
                                    className="w-5"
                                />
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
                    <SearchResult type={type} resources={resources[type]} />
                ) : (
                    <StartSearching />
                )}
            </div>
        </section>
    );
}
