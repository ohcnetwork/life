import React from 'react';
import { videoData } from '@data/video';

export const getStaticProps = async () => {
    return {
        props: {
            videoData
        }
    };
};

const Video = ({ videoData }) => {
    return (
        <div>
            <h1>All Videos Here</h1>
            {videoData.map((el) => (
                <h1>{el.Title}</h1>
            ))}
        </div>
    );
};

export default Video;
