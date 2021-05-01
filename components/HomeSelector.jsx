import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HomeSelector = ({ val, optionsList, handleChange, label, divider }) => {
    return (
        <>
            <div className="flex flex-col flex-1 my-2 md:my-0 dark:text-gray-200">
                <label htmlFor="state" className="text-sm">
                    {label}
                </label>
                <div className="flex items-center relative">
                    <select
                        id={label}
                        value={val}
                        onChange={(e) => handleChange(e)}
                        className="py-2 w-full font-bold text-xl outline-none bg-transparent dark:text-gray-400 dark:bg-gray-1000 rounded-md my-2 appearance-none pl-2 cursor-pointer z-0">
                        {optionsList.map((s, id) => (
                            <option
                                className="dark:text-white overflow-ellipsis"
                                key={id}
                                value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-0 mr-1 dark:text-white z-10">
                        <FontAwesomeIcon icon={faAngleDown} className="w-5" />
                    </div>
                </div>
            </div>
            {divider && (
                <div className="bg-gray-100 dark:bg-gray-1000 h-1 transform rotate-90 w-12 my-2 hidden md:block " />
            )}
        </>
    );
};

export default HomeSelector;
