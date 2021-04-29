import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import TwitterContainer from '@components/TwitterContainer';
import districtMapCity from '@data/map_dis_to_city';
import HomeSelector from '@components/HomeSelector';
import HomeTabs from '@components/HomeTabs';

export default function DetailedHome({ state, district, type }) {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');

    const statesWithDistricts = statesAndDistrict();
    const [tabVal, setTabVal] = useState('result');
    const changeTabs = (v) => setTabVal(v);

    const states = Object.keys(statesWithDistricts);
    state = states.find((e) => e.toLowerCase() === state?.toLowerCase()) || '';

    const [stateChoosen, setStateChoosen] = useState(state || states[0]);

    const districts = statesWithDistricts[stateChoosen];
    district = districts.find((e) => e.toLowerCase() === district?.toLowerCase()) || '';

    const [districtChoosen, setDistrictChoosen] = useState(district || districts[0]);

    const generatePageURL = (_state, _district, _resource) =>
        `/${parametreize(_state)}/${parametreize(_district)}/${parametreize(_resource)}`;

    const mapDistrictToCity = (s) => {
        // checks if it exists maps "North Delhi" -> "Delhi"
        return districtMapCity[s] || s;
    };

    const [resourceChoosen, setResourceChoosen] = useState(type || 'Oxygen');

    const resources = {
        Oxygen: getOxygen(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Medicine: medicineByDistrict(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Hospital: hospitalByDistrict(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Ambulance: getAmbulances(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Helpline: helplineByDistrict(parametreize(stateChoosen), parametreize(districtChoosen), true),
        Vaccine: getVaccine(parametreize(stateChoosen), parametreize(districtChoosen), true)
    };

    const handleChooseState = ({ target: { value } }) => {
        setStateChoosen(value);
        const newDistrict = statesWithDistricts[value][0];
        setDistrictChoosen(newDistrict);
    };

    const handleDistrictChange = ({ target: { value } }) => {
        setDistrictChoosen(value);
    };

    const handleResourceChange = ({ target: { value } }) => {
        setResourceChoosen(value);
    };

    return (
        <section className="w-full">
            <div className="bg-gray-200 dark:bg-gray-1200 text-center pt-5 pb-20">
                <h1 className="font-semibold text-xl dark:text-gray-300">{t.description}</h1>
            </div>
            <div className="-mt-12">
                <section className="bg-white max-w-7xl dark:bg-gray-1300 rounded-lg mx-auto p-5 shadow-lg flex flex-col md:flex-row md:items-center">
                    <HomeSelector
                        val={stateChoosen}
                        optionsList={states}
                        handleChange={handleChooseState}
                        label={`${t.select} ${t.state}`}
                        divider
                    />
                    <HomeSelector
                        val={districtChoosen}
                        optionsList={districts}
                        handleChange={handleDistrictChange}
                        label={`${t.select} ${t.district}`}
                        divider
                    />
                    <HomeSelector
                        val={resourceChoosen}
                        optionsList={Object.keys(resources)}
                        handleChange={handleResourceChange}
                        label={t.selectResource}
                    />
                    <div className="flex flex-col ml-0 md:ml-6 w-full md:w-min">
                        <Link
                            href={generatePageURL(stateChoosen, districtChoosen, resourceChoosen)}>
                            <button className="bg-indigo-600 hover:bg-indigo-700 w-full md:w-14 h-16 rounded-md cursor-pointer text-gray-200 flex justify-center items-center">
                                <span>
                                    <FontAwesomeIcon icon={faSearch} className="w-5" />
                                </span>
                                <span className="md:hidden ml-2">Search</span>
                            </button>
                        </Link>
                    </div>
                </section>
                {resourceChoosen ? (
                    <>
                        <HomeTabs tabVal={tabVal} onChange={changeTabs} />
                        {tabVal === 'result' && (
                            <SearchResult
                                type={resourceChoosen}
                                district={districtChoosen}
                                state={stateChoosen}
                                resources={resources[resourceChoosen]}
                            />
                        )}
                        {tabVal === 'twitter' && (
                            <TwitterContainer searchStr={mapDistrictToCity(districtChoosen)} />
                        )}
                    </>
                ) : (
                    <StartSearching text={t.startSearchingAmong} res={t.resources} />
                )}
            </div>
        </section>
    );
}