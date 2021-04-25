import React from 'react';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { copyToClipboard } from '../lib/utils';

const SocialSharing = ({ twitterText, url }) => {
    return (
        <div className="text-gray-700 dark:text-gray-400 text-lg pr-4  w-full flex ">
            Share
            <a href={`https://twitter.com/intent/tweet?text=${twitterText}`} target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Twitter"
                    icon={faTwitter}
                />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Facebook"
                    icon={faFacebook}
                />
            </a>
            <span
                className="ml-auto w-8 cursor-pointer"
                onClick={() => {
                    copyToClipboard(`${url}`);
                    alert('Copied!');
                }}>
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Click to Copy"
                    icon={faCopy}
                />
            </span>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Linkedin"
                    icon={faLinkedin}
                />
            </a>
        </div>
    );
};

export default SocialSharing;
