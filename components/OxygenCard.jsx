import {
    faMapMarkerAlt,
    faQuestionCircle,
    faBed,
    faProcedures
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialSharing from '@components/SocialSharing';

const fields = {
    approximatePatientsServedPerDay: 'Patients served per day (approx)',
    crateringToPeople: 'Cratering',
    oxygenRequired: 'Oxygen Req',
    highFlowOxygenConcentratorsRequired: 'High Oxygen Conc. needed',
    lowFlowOxygenConcentratorsRequired: 'Low Oxygen Conc. Needed',
    favipiravirRequired: 'Favipiravir Req',
    ppeKitsRequired: 'PPE Kits Req',
    remdesivirRequired: 'Remdesivir Req',
    otherItemsRequired: 'Other Items Req',
    tocilizumabRequired: 'Tocilizumab Required'
};

function OxygenCard({ data }) {
    const fieldELem = (record) => {
        return (
            <div className={`text-lg ${data[record] ? '' : 'text-red-600 dark:text-red-400'}`}>
                <span className="font-semibold">{fields[record]}</span> :{' '}
                <span>
                    {data[record] || (
                        <FontAwesomeIcon icon={faQuestionCircle} className="w-3 ml-2" />
                    )}
                </span>
            </div>
        );
    };
    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300 pb-3 hover:shadow-lg">
            <div className="w-full flex justify-between items-center pt-2">
                <div className="ml-4 font-mono text-xs font-bold text-white dark:text-black rounded-full py-1 px-2 bg-gray-600">
                    {' '}
                    {data.govtOrNonGovt || 'Govt'}
                </div>
                <div>
                    <SocialSharing
                        url={'pageUrl'}
                        twitterText={` More Info: ${'pageUrl'}`}
                        copyText={'copyText'}
                    />
                </div>
            </div>
            <div className="px-4">
                <div className="w-full px-2">
                    <div className="space-x-2 items-center">
                        <h1 className="text-2xl font-bold dark:text-white items-center justify-start">
                            {data.name}
                        </h1>
                    </div>
                    <div className="text-lg mt-1">{data.type}</div>
                    {data.state && data.district && (
                        <div className="text-sm  uppercase mt-3 text-gray-700 font-semibold dark:text-gray-500">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mr-2" />
                            <span className="mr-2">{data.villageTownCity}</span>
                            <span className="mr-2">{data.district}</span>|
                            <span className="ml-2">
                                {data.state} {data.pincode}
                            </span>
                        </div>
                    )}
                    <div
                        className={`flex flex-wrap space-x-4 text-sm text-white mt-2 font-bold items-center`}>
                        <div
                            className={`px-3 py-1 rounded-lg ${
                                data.beds ? 'bg-green-600' : 'bg-red-600'
                            }`}>
                            <FontAwesomeIcon icon={faBed} className="w-3 mr-2" />{' '}
                            <span className="mr-1">Beds:</span>
                            {data.beds || '0'}
                        </div>
                        <div
                            className={`px-3 py-1 rounded-lg ${
                                data.beds ? 'bg-green-600' : 'bg-red-600'
                            }`}>
                            <FontAwesomeIcon icon={faProcedures} className="w-3 mr-2" />{' '}
                            <span className="mr-1">Covid Beds:</span>
                            {data.covidBeds || '0'}
                        </div>
                    </div>
                    <div className="w-full flex  flex-wrap mt-3">
                        <div className="w-full md:w-2/3">
                            <div>{fieldELem('approximatePatientsServedPerDay')}</div>
                            <div>{fieldELem('crateringToPeople')}</div>
                            <div>{fieldELem('oxygenRequired')}</div>
                            <div>{fieldELem('highFlowOxygenConcentratorsRequired')}</div>
                            <div>{fieldELem('lowFlowOxygenConcentratorsRequired')}</div>
                        </div>
                        <div>
                            <div>{fieldELem('favipiravirRequired')}</div>
                            <div>{fieldELem('ppeKitsRequired')}</div>
                            <div>{fieldELem('remdesivirRequired')}</div>
                            <div>{fieldELem('otherItemsRequired')}</div>
                            <div>{fieldELem('tocilizumabRequired')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OxygenCard;
