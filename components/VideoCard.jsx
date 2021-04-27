import React from 'react';

const VideoCard = ({ dt }) => {
    const badgeClass = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs mr-1 border-gray-800 font-medium border text-gray-200`;
    return (
        <a href={dt['Content Link']}>
            <div className="my-2 p-4 border-gray-900 border rounded">
                <h2 className="text-2xl tracking-tight font-bold leading-tight text-white">
                    {dt.Title}
                </h2>
                <p className="text-white my-2">{dt['Key Message']}</p>
                <div className="mt-1">
                    <span class={badgeClass}>{dt['Primary Category']}</span>
                    <span class={badgeClass}>{dt['Secondary Category']}</span>
                    <span class={badgeClass}>{dt['Source of content']}</span>
                </div>
                <div className="mt-2 text-sm">
                    <span className="text-gray-300">Language Versions : </span>
                    <span className="text-gray-500">{dt['Language Versions']}</span>
                </div>
            </div>
        </a>
    );
};

export default VideoCard;
