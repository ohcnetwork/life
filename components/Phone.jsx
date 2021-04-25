import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Phone = ({ phones }) => {
    return (phones &&
        <span
            className='flex items-center text-gray-800 hover:text-gray-900 dark:text-white text-lg font-bold'>
            <FontAwesomeIcon className='text-xl w-6' icon={faPhoneAlt} />
            {
                phones.map(phone =>
                    <a className='ml-2' href={`tel:${phone}`} key={phone}>{phone}</a>
                )
            }
        </span>
    );
};

export default Phone;
