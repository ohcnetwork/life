import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function AboutQA({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full border-2 border-blue-500 shadow-md rounded-md py-4 px-8">
            <div className="flex justify-between items-center w-full">
                <div className="">{question}</div>
                {!open ? (
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        className="w-10 cursor-pointer"
                        icon={faPlusCircle}
                    />
                ) : (
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        className="w-10 cursor-pointer"
                        icon={faMinusCircle}
                    />
                )}
            </div>
            {open && <div className="text-sm text-gray-800 mt-3">{answer.map((ans) => ans)}</div>}
        </div>
    );
}

export default AboutQA;
