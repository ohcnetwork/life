import React, { useState } from 'react';
const Description = ({ text }) => {

    const [isReadMore, setIsReadMore] = useState(text.length < 40)

    return (
        <div className="text-sm xs:text-base font-normal mt-1 flex flex-wrap w-full">
            <div className="mr-1">
                {
                    isReadMore ? text : (text.substr(0, 40)) + "..."
                }
            </div>
            {
                !isReadMore &&
                <span onClick={(_) => setIsReadMore(e => !e)} className="cursor-pointer text-indigo-600 font-semibold">
                    Read More
                </span>
            }
        </div>
    );
}

export default Description;