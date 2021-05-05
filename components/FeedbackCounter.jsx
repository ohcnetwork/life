import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';

const checkIfPresentInLocalStorage = (key) => {
    return localStorage.getItem(key) !== null;
};

const FeedbackCounter = ({ externalId, upvotes, downvotes }) => {
    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const [downvoteCount, setDownvoteCount] = useState(downvotes);
    const [isCaptchaEnabled, setCaptcha] = useState(true);
    const [token, setToken] = useState('');

    // public key!
    const captchaKey = '6LdvxuQUAAAAADDWVflgBqyHGfq-xmvNJaToM0pN';

    useEffect(async () => {
        console.log(token);
        // TODO: Local Storage Check Here
    }, [token]);

    const handleChange = async (vote) => {
        if (!checkIfPresentInLocalStorage(`${vote}`)) {
            // TODO: Fetch Call Here
            try {
                const res = await fetch(
                    `https://careapi.coronasafe.network/api/v1/life/data/${externalId}/${vote}/`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(token)
                    }
                );
                if (res.ok) {
                    localStorage.setItem(`${vote}`, true);
                    vote === 'upvote'
                        ? setUpvoteCount((prev) => prev + 1)
                        : setDownvoteCount((prev) => prev + 1);
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            console.log('did');
        }
    };

    const onCaptchaChange = (value) => {
        setToken({
            'g-recaptcha-response': value
        });
    };

    return (
        <>
            {isCaptchaEnabled && (
                <div>
                    <ReCaptcha sitekey={captchaKey} onChange={onCaptchaChange} />
                </div>
            )}
            <button
                onClick={handleChange('upvote')}
                className="px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{upvoteCount}</span>
            </button>
            <button
                onClick={handleChange('downvote')}
                className="px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsDown} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{downvoteCount}</span>
            </button>
        </>
    );
};

export default FeedbackCounter;
