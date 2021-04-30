import React from 'react';
import { videoData } from '@data/video';
import VideoCard from '@components/VideoCard';
import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';

export const getStaticProps = async () => {
    return {
        props: {
            videoData
        }
    };
};

const Video = ({ videoData }) => {
    return (
        <section className="max-w-5xl mx-auto px-2">
            <Breadcumb list={[{ href: null, name: 'Videos' }]} />
            <Header title="Info on COVID-19" />
            <div className="flex flex-col mx-2 md:mx-6 pt-2 pl-4">
                {videoData.map((el) => (
                    <VideoCard key={el.id} dt={el} />
                ))}
            </div>
        </section>
    );
};

export default Video;
