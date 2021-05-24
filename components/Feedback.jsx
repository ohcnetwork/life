import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const Feedback = ({ external_id }) => {
    const [showFeedback, setShowFeedback] = useState(false)
    const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

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
        const res = await axios.post(process.env.NEXT_PUBLIC_FEEDBACK_API, {
            feedback,
            external_id,
            "g-recaptcha-response": token
        })

        if (res.status !== 200) {
            // report error
        } else {
            // report success
            console.log(res.data)
        }
    }

    return (
        <div>
            {!showFeedback && (
                <button
                    className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200"
                    onClick={() => setShowFeedback(true)}
                >
                    Give feedback
                </button>
            )}

            {
                showFeedback && (
                    <div>
                        <div className="w-full flex flex-wrap">
                            <button
                                className="flex-1 sm:block py-2 border-gray-100 border-2 mx-2"
                                onClick={(e) => handleCaptcha(e, 2)}
                            >
                                Verified and Available
                            </button>
                            <button
                                className="flex-1 py-2 border-gray-100 border-2 mx-2"
                                onClick={(e) => handleCaptcha(e, 3)}
                            >
                                Verified and Unavailable
                            </button>
                        </div>

                        <div className="w-full flex py-2">
                            <button
                                className="flex-1 py-2 border-gray-100 border-2 mx-2"
                                onClick={(e) => handleCaptcha(e, 0)}
                            >
                                Upvote
                            </button>
                            <button
                                className="flex-1 py-2 border-gray-100 border-2 mx-2"
                                onClick={(e) => handleCaptcha(e, 1)}
                            >
                                Downvote
                            </button>
                        </div>
                    </div>
                )
            }

            {showFeedback && (
                <button
                    className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200"
                    onClick={() => setShowFeedback(false)}
                >
                    Cancel
                </button>
            )}
        </div>
    )
}

export default Feedback;
