import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const FeedbackCounter = ({ upvotes, downvotes }) => {

    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const [downvoteCount, setDownvoteCount] = useState(downvotes);

    useEffect(() => {
        // TODO: Local Storage Check Here
    }, []);

    const handleUpvote = () => {
        // TODO: Fetch Call Here
        setUpvoteCount(prev => prev + 1);
    }

    const handleDownvote = () => {
        // TODO: Fetch Call Here
        setDownvoteCount(prev => prev + 1);
    }

    return (
        <React.Fragment>
            <button onClick={handleUpvote} className="px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{upvoteCount}</span>
            </button>
            <button onClick={handleDownvote} className="px-2 py-1 md:px-3 md:py-2 rounded-full cursor-pointer flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
                <FontAwesomeIcon icon={faThumbsDown} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{downvoteCount}</span>
            </button>
        </React.Fragment>
    );
}

export default FeedbackCounter;