import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

const FeedbackCounter = ({ external_id, upvotes, downvotes }) => {

    const [isUpvote, setIsUpvote] = useState(false);
    const [isDownvote, setIsDownvote] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha()

    useEffect(() => {
        if (typeof executeRecaptcha !== 'undefined') {
            const isUpvoted = (() => {
                if (typeof window !== 'undefined') {
                    const allUpvotes = JSON.parse(localStorage.getItem("upvotes") || "{}");
                    return external_id in allUpvotes;
                }
                return false;
            })()

            const isDownvoted = (() => {
                if (typeof window !== 'undefined') {
                    const allDownvotes = JSON.parse(localStorage.getItem("downvotes") || "{}");
                    return external_id in allDownvotes;
                }
                return false;
            })()
            setIsUpvote(isUpvoted);
            setIsDownvote(isDownvoted);
        }
    }, [executeRecaptcha])

    const handleUpvote = () => {
        if (typeof window !== 'undefined') {
            const allUpvotes = JSON.parse(localStorage.getItem("upvotes") || "{}");
            allUpvotes[external_id] = true
            localStorage.setItem("upvotes", JSON.stringify(allUpvotes))
        }
        try { handleChoiceSubmission(0) } catch (_) { }
        setIsUpvote(true);
    }

    const handleDownvote = () => {
        if (typeof window !== 'undefined') {
            const allDownvotes = JSON.parse(localStorage.getItem("downvotes") || "{}");
            allDownvotes[external_id] = true
            localStorage.setItem("downvotes", JSON.stringify(allDownvotes))
        }
        try { handleChoiceSubmission(1) } catch (_) { }
        setIsDownvote(true);
    }

    const handleChoiceSubmission = async (feedback) => {

        const token = await executeRecaptcha('choice')
        axios.post(process.env.NEXT_PUBLIC_FEEDBACK_API, {
            feedback,
            external_id,
            "g-recaptcha-response": token
        })
    }

    return (
        <React.Fragment>
            <button
                onClick={handleUpvote}
                disabled={isUpvote}
                className={"px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full flex items-center bg-gray-100 disabled:bg-gray-400 dark:bg-gray-900 dark:text-gray-200 cursor-pointer dark:disabled:bg-gray-300 dark:disabled:text-gray-900 disabled:cursor-not-allowed"}>
                <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{Number(upvotes) + Number(isUpvote)}</span>
            </button>
            <button
                onClick={handleDownvote}
                disabled={isDownvote}
                className={"px-2 py-1 md:px-3 md:py-2 rounded-full flex items-center bg-gray-100 disabled:bg-gray-400 dark:bg-gray-900 dark:text-gray-200 cursor-pointer dark:disabled:bg-gray-300 dark:disabled:text-gray-900 disabled:cursor-not-allowed"}>
                <FontAwesomeIcon icon={faThumbsDown} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{Number(downvotes) + Number(isDownvote)}</span>
            </button>
        </React.Fragment>
    );

}

const FeedbackCounterWrapper = (props) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY} scriptProps={{ async: true, defer: true }}>
            <FeedbackCounter {...props} />
        </GoogleReCaptchaProvider>
    )
}

export default FeedbackCounterWrapper
