import React from 'react';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialSharing = ({ twitterText, url }) => {
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
