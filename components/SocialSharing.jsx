import React, { useState } from 'react';
import { faTwitter, faFacebookSquare, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { copyToClipboard } from '@lib/utils';

const SocialSharing = ({ url, copyText }) => {
    const [copiedSuccess, setCopiesSuccess] = useState(false);
    return (
        <div className="text-gray-700 dark:text-gray-400 text-lg w-full flex ">
            <span>
                <a
                    href={`https://twitter.com/intent/tweet?text=${copyText}`}
                    rel="noopener"
                    target="_blank">
                    <FontAwesomeIcon
                        className="text-blue-500 ml-4"
                        title="Share on Twitter"
                        icon={faTwitter}
                    />
                </a>
            </span>
            <span>
                <a
                    href={`https://api.whatsapp.com/send?&text=${copyText}`}
                    rel="noopener"
                    target="_blank">
                    <FontAwesomeIcon
                        className="text-blue-500 ml-4"
                        title="Share on Whatsapp"
                        icon={faWhatsapp}
                    />
                </a>
            </span>
            <span>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                    rel="noopener"
                    target="_blank">
                    <FontAwesomeIcon
                        className="text-blue-500 ml-4"
                        title="Share on Facebook"
                        icon={faFacebookSquare}
                    />
                </a>
            </span>
            <span
                className="relative cursor-pointer"
                onClick={() => {
                    copyToClipboard(copyText);
                    setCopiesSuccess(true);
                    setTimeout(() => setCopiesSuccess(false), 2000);
                }}>
                {copiedSuccess && (
                    <span className="absolute -top-10 -left-1 dark:bg-green-600 bg-green-600 text-white py-2 px-3 rounded shadow text-xs">
                        Copied!
                    </span>
                )}
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Copy to Clipboard"
                    icon={faCopy}
                />
            </span>
            <span>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
                    target="_blank"
                    rel="noopener">
                    <FontAwesomeIcon
                        className="text-blue-500 ml-4"
                        title="Share on Linkedin"
                        icon={faLinkedin}
                    />
                </a>
            </span>
        </div>
    );
};

export default SocialSharing;
