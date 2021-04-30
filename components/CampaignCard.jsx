import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CampaignCard = ({ name, text, logoUrl, donate, open }) => {
    const [isReadMore, setIsReadMore] = useState(open);

    return (
        <div className="w-3/4 mx-auto">
            <div id="campaign" className="w-full">
                <ReactMarkdown
                    components={{
                        h2: ({ node, ...props }) => (
                            <p className="mt-5 text-2xl font-bold" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                            <p className="mt-3 text-xl font-bold" {...props} />
                        ),
                        p: ({ node, ...props }) => <p className="p-1" {...props} />,
                        em: ({ node, ...props }) => <span className="font-semibold" {...props} />,
                        a: ({ node, ...props }) => (
                            <a
                                className=" text-indigo-900 dark:text-primary-500 font-semibold"
                                {...props}
                            />
                        ),
                        li: ({ node, ...props }) => (
                            <div className="ml-5 flex items-baseline mb-2">
                                <FontAwesomeIcon className="w-3 mr-2" icon={faCircle} />
                                <p type="disc" className="" {...props} />
                            </div>
                        )
                    }}
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
