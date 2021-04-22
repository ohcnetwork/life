import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AmbulanceCard = ({ name, phone1, phone2, area, source, createdTime }) => {
  return (
    <>
    <li className="list-none col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">source</span>
            </div>
            <p className="mt-1 text-gray-500 text-sm truncate">{area}</p>
          </div>
        </div>

        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
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
      </li>
      <li>
        <div key={p.id} className="bg-white rounded-lg shadow">
              <div className="p-4 flex justify-between">
                <div>
                  <div className="font-bold text-2xl">
                    <h1 className="flex items-center justify-start">
                      {name}
                      <span>
                        {(p.verificationStatus &&
                          p.verificationStatus.toLocaleLowerCase()) ==
                        "verified" ? (
                          <FontAwesomeIcon
                            className="text-green-600 w-5 ml-4"
                            title="Verified"
                            icon={faCheckCircle}
                          />
                        ) : null}
                      </span>
                    </h1>
                    <div className="text-sm text-gray-700 font-semibold">
                      <span className="mr-2">{p.distributorName}</span>|
                      <span className="ml-2">{p.city}</span>
                    </div>
                  </div>
                  <div className="w-11/12 max-w-3xl mt-2">
                    <div className="text-sm">{area}</div>
                  </div>
                </div>
                <div className="flex space-x-2 items-start">
                  {phone1 && (
                    <a
                      className="font-mono text-gray-800 hover:text-gray-900 text-sm font-bold"
                      href={`tel:${phone1}`}
                    >
                      <FontAwesomeIcon
                        title={phone1}
                        className="text-xl w-6"
                        icon={faPhoneAlt}
                      />
                    </a>
                  )}
                  {phone2 && (
                    <a
                      className="font-bold text-sm text-gray-700 mt-0 hover:text-gray-900"
                      target="_blank"
                      href=""
                    >
                      <FontAwesomeIcon
                        title={phon2}
                        className="text-xl w-6"
                        icon={faPhoneAlt}
                      />
                    </a>
                  )}
                  {source && <a href={source}><FontAwesomeIcon
                    title={`${source}`}
                    className="text-xl w-6"
                    icon={faLink}
                  />
                  </a>}
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center mx-2 mt-2 pb-3">
                <div className="font-semibold">{p.description}</div>
                <div className="font-mono text-gray-700 text-sm">
                  {parseDateString(p.createdTime)}
                </div>
              </div>
            </div>
      </li>
      </>
  );
};

export default AmbulanceCard;
