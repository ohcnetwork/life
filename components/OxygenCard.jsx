import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OxygenCard = ({ name, company, phone1, phone2, description, source, slink, fstate, fdistrict }) => {
  return (
    <div className="flex mt-4  col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="w-1/2 flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">{name}</h3>
              {company &&<span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{company}</span>}
              <a href={slink} > <FontAwesomeIcon alt={source || 'Source'} icon={faInfoCircle} /> </a>
            </div>
            {fstate || fdistrict ? <p className="mt-1 text-gray-500 text-sm truncate">{`from ${fstate ? fstate + "," : ""} ${fdistrict}`}</p> : <div/>}
            <p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
          </div>
        </div>

        <div>
          <div className="">
            {phone1 ? <div className="-ml-px w-0 flex-1 flex">
              <a href={`tel:${phone1}`} className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                <svg className="w-5 h-5 text-gray-400" x-description="Heroicon name: solid/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="ml-3">{phone1}</span>
              </a>
            </div> : < div/>}

            {phone2 ? <div className="-ml-px w-0 flex-1 flex">
              <a href={`tel:${phone2}`} className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                <svg className="w-5 h-5 text-gray-400" x-description="Heroicon name: solid/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className="ml-3">{phone2}</span>
              </a>
            </div> : < div/>}
          </div>
        </div>
      </div>
  );
};

export default OxygenCard;
