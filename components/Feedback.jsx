import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import ReCAPTCHA from 'react-google-recaptcha'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import 'reactjs-popup/dist/index.css';

const FeedbackButton = React.forwardRef(({ open, ...props }, ref) => (
    <button className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200" ref={ref} {...props}>
        Give feedback
    </button>
))

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

    const handleClick = (f) => {
        setFeedback(f)
        setShowRecaptcha(true)
    }

    const handleCaptcha = (e, feedback) => {
        e.preventDefault()
        window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
            console.log(token)
            handleSubmit(token, feedback)
        })
    }

    const handleSubmit = (token, feedback) => {
        fetch(process.env.NEXT_PUBLIC_FEEDBACK_API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "feedback": feedback,
                "external_id": external_id,
                "g-recaptcha-response": token
            })
        }).then(res => {
            console.log(res)
        });
    }

    return (
        // <Popup trigger={open => <FeedbackButton open={open} />} position="right center" modal={true} nested>
        //     {close => (
        //         <div className = "max-w-3xl bg-white hover:bg-gray-100 relative dark:hover:bg-gray-1000 dark:bg-gray-1200 dark:text-gray-300 shadow-md rounded-md md:mx-auto px-3 py-4">
        //             <div>
        //                 <button
        //                     className="cursor-pointer block py-2 px-5 absolute -right-10 -top-10 text-2xl rounded-full"
        //                     onClick={close}>
        //                     &times;
        //                 </button>
        //             </div>

        //             <div>
        //                 <button onClick={(e) => handleCaptcha(e, 2)}>Verified and Available</button>
        //             </div>

        //             <div>
        //                 <button onClick={() => handleClick(3)}>Verified and Unavailable</button>
        //             </div>

        //             {
        //                 // showRecaptcha && (
        //                 //     <div>
        //                 //         {/* <ReCAPTCHA sitekey="6LfdIMcaAAAAAMDJOQu8HBAAAnag6uuct7vkbSIK" onChange={handleCaptcha} /> */}
        //                 //         <GoogleReCaptchaProvider reCaptchaKey="6LfdIMcaAAAAAMDJOQu8HBAAAnag6uuct7vkbSIK">
        //                 //             <GoogleReCaptcha onVerify={handleCaptcha} />
        //                 //         </GoogleReCaptchaProvider>
        //                 //     </div>
        //                 // )
        //             }
        //         </div>
        //     )}
        // </Popup>
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
