import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function AboutQA({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full border border-gray-700 shadow-md rounded-md py-4 md:px-8 px-2">
            <div className="flex justify-between items-center w-full">
                <div className="w-3/4 mr-1">{question}</div>
                <div className="w-1/4">
                    {!open ? (
                        <FontAwesomeIcon
                            onClick={() => setOpen(!open)}
                            className="w-10 ml-auto cursor-pointer"
                            icon={faPlusCircle}
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={() => setOpen(!open)}
                            className="w-10 ml-auto cursor-pointer"
                            icon={faMinusCircle}
                        />
                    )}
                </div>
            </div>
            {open && <div className="text-sm text-gray-700 mt-3">{answer.map((ans) => ans)}</div>}
        </div>
    );
}

export default AboutQA;
