import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY
const MySwal = withReactContent(Swal)

const FeedbackCounter = ({ external_id, upvotes, downvotes }) => {

    // This state is just used for re-rendering the component
    const [_, setReload] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha()

    const isUpvote = (() => {
        if (typeof window !== 'undefined') {
            const allUpvotes = JSON.parse(localStorage.getItem("upvotes") || "{}");
            return external_id in allUpvotes;
        }
        return false;
    })()

    const isDownvote = (() => {
        if (typeof window !== 'undefined') {
            const allDownvotes = JSON.parse(localStorage.getItem("downvotes") || "{}");
            return external_id in allDownvotes;
        }
        return false;
    })()

    const handleUpvote = () => {
        if (typeof window !== 'undefined') {
            const allUpvotes = JSON.parse(localStorage.getItem("upvotes") || "{}");
            allUpvotes[external_id] = true
            localStorage.setItem("upvotes", JSON.stringify(allUpvotes))
        }
        handleChoiceSubmission(0)
        setReload()
    }

    const handleDownvote = () => {
        if (typeof window !== 'undefined') {
            const allDownvotes = JSON.parse(localStorage.getItem("downvotes") || "{}");
            allDownvotes[external_id] = true
            localStorage.setItem("downvotes", JSON.stringify(allDownvotes))
        }
        handleChoiceSubmission(1)
        setReload()
    }

    const handleChoiceSubmission = async (feedback) => {

        const token = await executeRecaptcha('choice')
        const res = await axios.post(process.env.NEXT_PUBLIC_FEEDBACK_API, {
            feedback,
            external_id,
            "g-recaptcha-response": token
        })

        if (res.status !== 200) {
            return MySwal.fire({
                icon: 'error',
                titleText: res?.data?.type || 'Error',
                text: res?.data?.message || 'We could not submit feedback'
            })
        }

        MySwal.fire({
            icon: 'success',
            titleText: res.data.type,
            text: res.data.message
        })
    }

    return (
        <React.Fragment>
            <button
                onClick={handleUpvote}
                disabled={isUpvote}
                className={"px-2 py-1 md:px-3 md:py-2 mr-2 rounded-full flex items-center bg-gray-100 " + (isUpvote ? "dark:bg-gray-300 dark:text-gray-900 cursor-not-allowed" : "dark:bg-gray-900 dark:text-gray-200 cursor-pointer")}>
                <FontAwesomeIcon icon={faThumbsUp} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{upvotes + Number(isUpvote)}</span>
            </button>
            <button
                disabled={isDownvote}
                onClick={handleDownvote}
                className={"px-2 py-1 md:px-3 md:py-2 rounded-full flex items-center bg-gray-100 " + (isDownvote ? "dark:bg-gray-300 dark:text-gray-900 cursor-not-allowed" : "dark:bg-gray-900 dark:text-gray-200 cursor-pointer")}>
                <FontAwesomeIcon icon={faThumbsDown} className="w-2 h-2 dark:text-primary-500" />
                <span className="text-xs ml-2">{downvotes + Number(isDownvote)}</span>
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
