import Breadcumb from '@components/Breadcumb';
import VideoCard from '@components/VideoCard';
import { videoData } from '@data/video';

export const getStaticProps = async ({ params }) => {
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
    return (
        <div>
            <section className="pt-10">
                <div>
                    <Breadcumb list={[{ href: null, name: `${video['Title']}` }]} />
                </div>
                <h2 className="text-3xl mb-5 md:text-4xl xl:text-5xl tracking-tight mt-4 font-bold leading-tight dark:text-white text-gray-1200 ">
                    Videos
                </h2>
                <VideoCard dt={video} />
            </section>
        </div>
    );
};

export default VideoSingle;
