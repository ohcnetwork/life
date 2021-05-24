import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const MySwal = withReactContent(Swal)
const choices = [
    { name: 'Upvote', value: 0 },
    { name: 'Downvote', value: 1 },
    { name: 'Verified And Available', value: 2 },
    { name: 'Verified And Unavailable', value: 3 }
]

const Feedback = ({ external_id }) => {
    const [loading, setLoading] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)
    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

    const FeedbackButton = ({ onClick }) => {
        return (
            <button
                className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200"
                onClick={onClick}
            >
                {showFeedback ? 'Close' : 'Give feedback'}
            </button>
        )
    }

    const ChoicesButton = () => {
        return choices.map((choice, i) => (
            <button
                className="py-2 border-gray-100 border-2 mx-2"
                onClick={e => handleCaptcha(e, choice.value)}
                key={i}
            >
                {!loading ? choice.name : (
                    <FontAwesomeIcon icon={faSpinner} spin />
                )}
            </button>
        ))
    }

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
            const isScriptExist = document.getElementById(id);

            if (!isScriptExist) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url;
                script.id = id;
                script.onload = function () {
                    if (callback) callback();
                };
                document.body.appendChild(script);
            }

            if (isScriptExist && callback) callback();
        }

        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
            console.log("Script loaded!");
        });
    }, [SITE_KEY]);

    const handleCaptcha = (e, feedback) => {
        e.preventDefault()
        window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
            console.log(token)
            handleSubmit(token, feedback)
        })
    }

    const handleSubmit = async (token, feedback) => {
        setLoading(true)
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
            {!showFeedback && (
                <FeedbackButton onClick={() => setShowFeedback(true)} />
            )}

            {
                showFeedback && (
                    <div className="grid grid-flow-col grid-cols-2 grid-flow-row auto-rows-max gap-4 px-1 py-2">
                        <ChoicesButton />
                    </div>
                )
            }

            {showFeedback && (
                <FeedbackButton onClick={() => setShowFeedback(false)} />
            )}
        </div>
    )
}

export default Feedback;
