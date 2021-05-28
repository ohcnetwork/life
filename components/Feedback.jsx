import axios from 'axios'
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import withReactContent from 'sweetalert2-react-content'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY
const MySwal = withReactContent(Swal)
const choices = [
    { name: 'Verified And Available', value: 2 },
    { name: 'Verified And Unavailable', value: 3 }
]

const Feedback = ({ external_id }) => {
    const [loading, setLoading] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const { executeRecaptcha } = useGoogleReCaptcha()

    const FeedbackButton = () => {
        return (
            <button
                className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200"
                onClick={() => setShowFeedback(!showFeedback)}
            >
                {showFeedback ? 'Close' : 'Give feedback'}
            </button>
        )
    }

    const ChoicesButton = () => {
        return choices.map((choice, i) => (
            <button
                className="py-2 border-gray-100 border-2 mx-2"
                onClick={e => handleChoiceSubmission(e, choice.value)}
                key={i}
            >
                {!loading ? choice.name : (
                    <FontAwesomeIcon icon={faSpinner} spin />
                )}
            </button>
        ))
    }

    const handleChoiceSubmission = async (e, feedback) => {
        e.preventDefault()
        setLoading(true)

        const token = await executeRecaptcha('choice')
        const res = await axios.post(process.env.NEXT_PUBLIC_FEEDBACK_API, {
            feedback,
            external_id,
            "g-recaptcha-response": token
        })

        setLoading(false)
        setShowFeedback(false)

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
        <div>
            {showFeedback && (
                <div className="grid grid-cols-2 grid-flow-row auto-rows-max gap-4 px-1 py-2">
                    <ChoicesButton />
                </div>
            )}
            <FeedbackButton />
        </div>
    )
}

const FeedbackWrapper = ({ external_id }) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY} scriptProps={{ async: true, defer: true }}>
            <Feedback external_id={external_id} />
        </GoogleReCaptchaProvider>
    )
}

export default FeedbackWrapper
