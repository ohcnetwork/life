import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function AboutQA({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full border-2 border-blue-500 shadow rounded-md py-4 px-8">
            <div className="flex justify-between items-center w-full">
                <div className="">{question}</div>
                <FontAwesomeIcon className="w-10 cursor-pointer" icon={faPlusCircle} />
            </div>
            {open && <div>{answer}</div>}
        </div>
    );
}

export default AboutQA;
