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
        if (value) return value;
        return (
            <span>{value || <FontAwesomeIcon icon={faQuestionCircle} className="w-3 ml-2" />}</span>
        );
    };
    return (
        <tr>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{data.name}</div>
                        <div className="text-sm text-gray-500">{data.type}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                    {data.villageTownCity +
                        ' ' +
                        data.district +
                        ' ' +
                        data.state +
                        ' - ' +
                        data.pincode}
                </div>
                <div className="text-sm text-gray-500">
                    {data.secondaryDistrictsAndStates.split(' ').join(' | ')}
                </div>
            </td>
            <td className="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">HIGH:</div>
                    <div className="text-sm text-gray-900">
                        {checkValue(data.highFlowOxygenConcentratorsRequired)}
                    </div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">LOW:</div>
                    <div className="text-sm text-gray-900">
                        {checkValue(data.lowFlowOxygenConcentratorsRequired)}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">COVID:</div>
                    <div className="text-sm text-gray-900">{checkValue(data.covidBeds)}</div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">TOTAL:</div>
                    <div className="text-sm text-gray-900">{checkValue(data.beds)}</div>
                </div>
            </td>
            <td className="px-6 py-4 font-bold">
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">SERVED:</div>
                    <div className="text-sm text-gray-900">
                        {checkValue(data.approximatePatientsServedPerDay)}
                    </div>
                </div>
                <div className="flex">
                    <div className="text-sm text-gray-500 mr-1">TOTAL:</div>
                    <div className="text-sm text-gray-900">
                        {checkValue(data.crateringToPeople)}
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-600 text-black">
                    {data.govtOrNonGovt}
                </span>
            </td>
        </tr>
    );
}

export default OxygenCard;
