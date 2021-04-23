import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialSharing = ({ twitterText }) => {
    return (
        <div className="text-white flex text-xl mx-auto">
            Share
            <a href={`https://twitter.com/intent/tweet?text=${twitterText}`}>
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Twitter"
                    icon={faTwitter}
                    height={32}
                />
            </a>
        </div>
    );
};

export default SocialSharing;
