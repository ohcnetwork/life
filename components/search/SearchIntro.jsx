import React, { useState } from 'react';
import { totalResources } from '@lib/api';
import {
    faAmbulance,
    faCapsules,
    faCarrot,
    faHospital,
    faLungsVirus,
    faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const resources = [
    { name: 'Oxygen', icon: faLungsVirus },
    { name: 'Medicine', icon: faCapsules },
    { name: 'Hospital', icon: faHospital },
    { name: 'Ambulance', icon: faAmbulance },
    { name: 'Helpline', icon: faPhoneAlt },
    { name: 'Food', icon: faCarrot }
]

const SearchIntro = () => {

    const { individual: count } = totalResources();
    const [currentResource, setCurrentResource] = useState(0);

    useState(() => {
        const intervalId = setInterval(() => {
            setCurrentResource(prev => {
                if (prev === (resources.length - 1)) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 1500);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const currentResourceName = resources[currentResource].name
    const currentResourceCount = count[currentResourceName];
    const currentResourceIcon = resources[currentResource].icon;

    return (
        <span className="font-semibold dark:text-gray-500">
            <span>Search over </span>
            <span className="font-bold ml-2 text-secondary-600 dark:text-primary-400">
                <FontAwesomeIcon icon={currentResourceIcon} className="w-3 mr-2" />
                {currentResourceCount}
            </span>
            <span>+ {currentResourceName} resources!</span>
        </span>
    );
}

export default SearchIntro;