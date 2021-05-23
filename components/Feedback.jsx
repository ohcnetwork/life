import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const FeedbackButton = React.forwardRef(({ open, ...props }, ref) => (
    <button className="mx-1 my-2 bg-indigo-600 hover:bg-indigo-700 w-full h-10 rounded-md cursor-pointer text-gray-200" ref={ref} {...props}>
        Give feedback
    </button>
))

const Feedback = () => {
    return (
        <Popup trigger={open => <FeedbackButton open={open} />} position="right center" modal={true} nested>
            {close => (
                <div className = "max-w-3xl bg-white hover:bg-gray-100 relative dark:hover:bg-gray-1000 dark:bg-gray-1200 dark:text-gray-300 shadow-md rounded-md md:mx-auto px-3 py-4">
                    <div>
                        <button className = "cursor-pointer block py-2 px-5 absolute -right-10 -top-10 text-lg" onClick={close}>&times;</button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default Feedback;
