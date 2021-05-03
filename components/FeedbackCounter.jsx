import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const checkIfPresentInLocalStorage = (key) => {
    return localStorage.getItem(key) !== null;
};

const FeedbackCounter = ({ externalId, upvotes, downvotes }) => {
    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const [downvoteCount, setDownvoteCount] = useState(downvotes);

    useEffect(() => {
        // TODO: Local Storage Check Here
        console.log(externalId);
    }, []);

    const handleUpvote = async () => {
        if (!checkIfPresentInLocalStorage('upvoted')) {
            // TODO: Fetch Call Here
            try {
                const res = await fetch(
                    `https://careapi.coronasafe.in/api/v1/life/data/${externalId}/upvote/`,
                    {
                        method: 'POST'
                    }
                );
                if (res.ok) {
                    localStorage.setItem('upvoted', true);
                    setUpvoteCount((prev) => prev + 1);
                } else {
                    throw new Error('Did not work');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('did');
        }
    };

    const handleDownvote = () => {
        console.log(checkIfPresentInLocalStorage('downvoted'));
        setDownvoteCount((prev) => prev + 1);
    };

    return (
        <React.Fragment>
            <button
                onClick={handleUpvote}
                className="px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{upvoteCount}</span>
            </button>
            <button
                onClick={handleDownvote}
                className="px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsDown} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{downvoteCount}</span>
            </button>
        </React.Fragment>
    );
};

export default FeedbackCounter;
