import { videoData } from '@data/video';

export const getStaticProps = async ({ params }) => {
    console.log('***************************');
    console.log(params);
    console.log('***************************');
    const videoList = videoData.filter((v) => v.id.toString() === params.id);
    return {
        props: {
            video: videoList[0]
        }
    };
};

export const getStaticPaths = async () => {
    const paths = videoData.map((v) => ({
        params: { id: v.id.toString() }
    }));

    return { paths, fallback: false };
};

const VideoSingle = ({ video }) => {
    return <div>{video['Title']}</div>;
};

export default VideoSingle;
