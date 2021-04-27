import {
    faMapMarkerAlt,
    faQuestionCircle,
    faBed,
    faProcedures,
    faAngleUp,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialSharing from '@components/SocialSharing';

function OxygenCard({ data }) {
    const checkValue = (value) => {
        if(value) return value;
        return (
            <span>
                {value || (
                    <FontAwesomeIcon icon={faQuestionCircle} className="w-3 ml-2" />
                )}
            </span>
        );
    };
    return (
        <tr>
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                        { data.name }
                        </div>
                        <div class="text-sm text-gray-500">
                        { data.type }
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="text-sm text-gray-900">{ data.villageTownCity + " " + data.district + " " + data.state + " - " + data.pincode }</div>
                <div class="text-sm text-gray-500">{ data.secondaryDistrictsAndStates.split(" ").join(" | ") }</div>
            </td>
            <td class="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">HIGH:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.highFlowOxygenConcentratorsRequired) }</div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">LOW:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.lowFlowOxygenConcentratorsRequired) }</div>
                </div>
            </td>
            <td class="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">COVID:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.covidBeds) }</div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">TOTAL:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.beds) }</div>
                </div>
            </td>
            <td class="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">SERVED:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.approximatePatientsServedPerDay) }</div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">TOTAL:</div>
                    <div class="text-sm text-gray-900">{ checkValue(data.crateringToPeople) }</div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-600 text-black">
                    { data.govtOrNonGovt }
                </span>
            </td>
        </tr>
    );
}

export default OxygenCard;


{/* <div className="w-full bg-white rounded-lg shadow dark:bg-gray-1200 dark:text-gray-300 pb-3 hover:shadow-lg">
    <div className="w-full flex justify-between items-center pt-2">
                <div className="ml-4 font-mono text-xs font-bold text-white dark:text-black rounded-full py-1 px-2 bg-gray-600">
                    {' '}
                    {data.govtOrNonGovt || 'Govt'}
                </div>
                <div className="ml-auto">
                    <SocialSharing
                        url={'https://life.coronasafe.network/oxygen_requirements'}
                        twitterText={` More Info: https://life.coronasafe.network/oxygen_requirements`}
                        copyText={`
                                    Name: ${data.name}
                                    State: ${data.state}
                                    District: ${data.district}
                                    Patients served perday: ~${data.approximatePatientsServedPerDay}
                                    Hign flow oxygen required: ${data.highFlowOxygenConcentratorsRequired}
                                    Low flow oxygen required: ${data.lowFlowOxygenConcentratorsRequired}
                                    PPE kits required: ${data.ppeKitsRequired}
                                    Remesivir required: ${data.remdesivirRequired}
                                    Tocilizumab required: ${data.tocilizumabRequired}
                                    Favipiravir required: ${data.favipiravirRequired}
                                    Other items required: ${data.otherItemsRequired}
                                    `}
                    />
                </div>
            </div>         </div>*/}
