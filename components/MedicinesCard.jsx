import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faPhoneAlt,
  faCheckCircle,
  faExclamationTriangle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseDateString } from "../lib/utils";

const MedicinesCard = ({
  verificationStatus,
  name,
  distributorName,
  city,
  phone1,
  address,
  description,
  createdTime,
  slink,
  email,
  lastVerifiedOn,
}) => {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-1000 dark:text-gray-300">
      <div className="p-4 flex justify-between">
        <div>
          <div className="font-bold text-2xl">
            <h1 className="flex dark:text-white items-center justify-start">
              {name}
              <span>
                {(verificationStatus &&
                  verificationStatus.toLocaleLowerCase()) == "verified" ? (
                  <FontAwesomeIcon
                    className="text-green-600 w-5 ml-4"
                    title="Verified"
                    icon={faCheckCircle}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-yellow-400 w-4 ml-4"
                    title="Not verified"
                    icon={faExclamationTriangle}
                  />
                )}
              </span>
            </h1>
            <div className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
              <span className="mr-2">{distributorName}</span>|
              <span className="ml-2">{city}</span>
            </div>
          </div>
          <div className="w-11/12 max-w-3xl mt-2">
            <div className="text-sm">{address}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {phone1 && (
            <a
              className="font-mono text-gray-800 hover:text-gray-900 dark:text-white text-lg font-bold"
              href={`tel:${phone1}`}
            >
              <FontAwesomeIcon
                title={phone1}
                className="text-xl w-6"
                icon={faPhoneAlt}
              />
              <span className="ml-2">{phone1}</span>
            </a>
          )}
          {email && (
            <a
              className="font-bold text-lg text-gray-700 dark:text-white mt-0 hover:text-gray-900"
              target="_blank"
              href="mailto:callmatkarna@gmail.com"
            >
              <FontAwesomeIcon
                title={`${email}`}
                className="text-xl w-6"
                icon={faEnvelope}
              />
              <span className="ml-2 text-lg mt-1">Email</span>
            </a>
          )}
          {slink && (
            <a href={slink} className="dark:text-white">
              <FontAwesomeIcon
                title={`${slink}`}
                className="text-xl w-6"
                icon={faLink}
              />
              <span className="ml-2 text-lg mt-1">Source Link</span>
            </a>
          )}
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center mx-2 mt-2 pb-3">
        <div className="font-semibold dark:text-gray-400">{description}</div>
        <div className="font-mono text-gray-700 dark:text-gray-400 text-sm">
          {lastVerifiedOn ?
                          `Verified @ ${parseDateString(lastVerifiedOn)}` : null}
        </div>
      </div>
    </div>
  );
};

export default MedicinesCard;
