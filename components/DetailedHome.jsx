import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useLocale from '@hooks/use-locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocaleContext } from '@hooks/use-locale-context';
import {
    getAmbulances,
    getFood,
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
import { useRouter } from 'next/router';
import { isVerified } from '../lib/utils';
import MapContainer from './MapContainer';

export default function DetailedHome({ state, district, type }) {
    const { locale } = useLocaleContext();
    const t = useLocale(locale, 'home');
    const router = useRouter();

    const statesWithDistricts = statesAndDistrict();
    const [tabVal, setTabVal] = useState('result');
    const changeTabs = (v) => setTabVal(v);

    const states = Object.keys(statesWithDistricts);
    state = states.find((e) => e.toLowerCase() === state?.toLowerCase()) || '';

    const [stateChoosen, setStateChoosen] = useState(state || states[0]);

    const districts = ["All"].concat(statesWithDistricts[stateChoosen]);
    district = districts.find((e) => e.toLowerCase() === district?.toLowerCase()) || '';

    const [districtChoosen, setDistrictChoosen] = useState(district || "All");

    const generatePageURL = (_state, _district, _resource) => {
        if (_district === "All") {
            return `/${parametreize(_state)}`
        }
        if (_resource === "All")
            return `/${parametreize(_state)}/${parametreize(_district)}`;

        return `/${parametreize(_state)}/${parametreize(_district)}/${parametreize(_resource)}`;
    }

    const getStateIfDistrictAll = (_state, _district) => {
        if (_district === "All") return _state;
        return _district
    }

    const mapDistrictToCity = (s) => {
        // checks if it exists maps "North Delhi" -> "Delhi"
        return districtMapCity[s] || s;
    };

    const [resourceChoosen, setResourceChoosen] = useState(type || 'All');

    const locationResources = {
        get All() {
            return []
                .concat(this.Oxygen)
                .concat(this.Medicine)
                .concat(this.Hospital)
                .concat(this.Ambulance)
                .concat(this.Helpline)
                .concat(this.Vaccine)
                .sort((record) => (isVerified(record.verification_status) ? -1 : 1));
        },
        Oxygen: getOxygen(null, null, true, true),
        Medicine: medicineByDistrict(null, null, true, true),
        Hospital: hospitalByDistrict(null, null, true, true),
        Ambulance: getAmbulances(null, null, true, true),
        Helpline: helplineByDistrict(null, null, true, true),
        Vaccine: getVaccine(null, null, true, true),
        Food: getFood(null, null, true, true)
    };

    const resources = {
        get All() {
            return []
                .concat(this.Oxygen)
                .concat(this.Medicine)
                .concat(this.Hospital)
                .concat(this.Ambulance)
                .concat(this.Helpline)
                .concat(this.Vaccine)
                .sort((record) => (isVerified(record.verification_status) ? -1 : 1));
        },
        Oxygen: getOxygen(
            parametreize(state),
            parametreize(district),
            true
        ),
        Medicine: medicineByDistrict(
            parametreize(state),
            parametreize(district),
            true
        ),
        Hospital: hospitalByDistrict(
            parametreize(state),
            parametreize(district),
            true
        ),
        Ambulance: getAmbulances(
            parametreize(state),
            parametreize(district),
            true
        ),
        Helpline: helplineByDistrict(
            parametreize(state),
            parametreize(district),
            true
        ),
        Vaccine: getVaccine(
            parametreize(state),
            parametreize(district),
            true
        ),
        Food: getFood(
            parametreize(state),
            parametreize(district),
            true
        )
    };

    const handleChooseState = ({ target: { value } }) => {
        changeTabs('result');
        setStateChoosen(value);
        const newDistrict = "All";
        setDistrictChoosen(newDistrict);
        router.push(
            generatePageURL(value, newDistrict, resourceChoosen)
        );
    };

    const handleDistrictChange = ({ target: { value } }) => {
        changeTabs('result');
        setDistrictChoosen(value);
        router.push(
            generatePageURL(stateChoosen, value, resourceChoosen)
        );
    };

    const handleResourceChange = ({ target: { value } }) => {
        changeTabs('result');
        setResourceChoosen(value);
        router.push(
            generatePageURL(stateChoosen, districtChoosen, value)
        );
    };

    return (
        <section className="w-full">
            <div className="bg-gray-200 dark:bg-gray-1200 text-center pt-5 pb-20">
                <h1 className="font-semibold text-xl dark:text-gray-300">{t.description}</h1>
            </div>
            <div className="-mt-12">
                <section className="bg-white max-w-7xl dark:bg-gray-1300 rounded-lg mx-3 md:mx-auto p-5 shadow-lg flex flex-col md:flex-row md:items-center">
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
                        <HomeTabs tabVal={tabVal} onChange={changeTabs} resources={resources[resourceChoosen]} />
                        <div style={{ minHeight: '315px' }}>
                            {tabVal === 'result' && (
                                <SearchResult
                                    changeTabs={changeTabs}
                                    type={resourceChoosen}
                                    district={districtChoosen}
                                    resources={resources[resourceChoosen]}
                                />
                            )}
                            {tabVal === 'twitter' && (
                                <TwitterContainer
                                    searchStr={mapDistrictToCity(getStateIfDistrictAll(stateChoosen, districtChoosen))}
                                />
                            )}
                            {tabVal === 'maps' && (
                                <MapContainer
                                    resourceChoosen={resourceChoosen}
                                    resources={locationResources[resourceChoosen]}
                                    district={getStateIfDistrictAll(stateChoosen, districtChoosen)}
                                    state={stateChoosen}
                                />
                            )}
                            {tabVal === 'twitter_on_no_data' && (
                                <TwitterContainer
                                    noRes
                                    noResText={getStateIfDistrictAll(stateChoosen, districtChoosen)}
                                    searchStr={mapDistrictToCity(getStateIfDistrictAll(stateChoosen, districtChoosen))}
                                />
                            )}
                        </div>
                    </>
                ) : (
                    <StartSearching text={t.startSearchingAmong} res={t.resources} />
                )}
            </div>
        </section>
    );
}
