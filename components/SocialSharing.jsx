import React, { useState } from 'react';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { copyToClipboard } from '../lib/utils';

const SocialSharing = ({ twitterText, url }) => {
    const [copiedSuccess, setCopiesSuccess] = useState(false);
    return (
        <div className="text-black dark:text-white  w-full flex text-xl ">
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
            <p
                className="relative"
                onClick={() => {
                    copyToClipboard(twitterText);
                    setCopiesSuccess(true);
                    alert('heye');
                }}>
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Facebook"
                    icon={faCopy}
                />
            </p>
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
