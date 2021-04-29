import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'


const CampaignCard = ({ name, text, logoUrl, donate, open }) => {
    const [isReadMore, setIsReadMore] = useState(open);

    return (
        <div className="w-3/4 mx-auto">
            <div id="campaign" className="w-full">
                <ReactMarkdown
                    remarkPlugins={[gfm]}
                    children={isReadMore ? text : text.substr(0, 300)}
                />
            </div>
            <div
                onClick={() => setIsReadMore((prev) => !prev)}
                className="text-indigo-600 font-semibold cursor-pointer">
                {isReadMore ? 'Read less' : 'Read more'}
            </div>
        </div>
    );
};
export default CampaignCard;
