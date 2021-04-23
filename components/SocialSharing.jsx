import React from 'react';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const copyToClipboard = () => {
    let element = document.getElementById('shareLink');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert(`Copied to Clipboard: ${element.value}`);
};

const SocialSharing = ({ twitterText, fbURL, linkedinURL, url }) => {
    return (
        <div className="text-white w-full flex text-xl ">
            <div className="invisible">
                <div className="w-0 mr-3 text-black">
                    <input
                        id="shareLink"
                        type="text"
                        className="lg:w-full p-1 rounded mr-5"
                        value={`${linkedinURL}`}
                        // disabled="true"
                    />
                </div>
            </div>
            Share
            <a href={`https://twitter.com/intent/tweet?text=${twitterText}`} target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Twitter"
                    icon={faTwitter}
                />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${fbURL}`} target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Facebook"
                    icon={faFacebook}
                />
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${linkedinURL}`}
                target="_blank">
                <FontAwesomeIcon
                    className="text-blue-500 ml-4"
                    title="Share on Linkedin"
                    icon={faLinkedin}
                />
            </a>
            <div
                onClick={() => {
                    copyToClipboard();
                }}>
                <FontAwesomeIcon
                    className="text-blue-500 ml-4 cursor-pointer"
                    title="Copy to Clipboard"
                    icon={faCopy}
                />
            </div>
        </div>
    );
};

export default SocialSharing;
