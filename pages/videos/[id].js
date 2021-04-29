import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import VideoCard from '@components/VideoCard';
import { videoData } from '@data/video';
import { parametreize } from '@lib/utils';

export const getStaticProps = async ({ params }) => {
    const videoList = videoData.filter(
        (v) => parametreize(v['Title']) === parametreize(params['id'])
    );
    return {
        props: {
            video: videoList[0]
        }
    };
};

export const getStaticPaths = async () => {
    const paths = videoData.map((v) => ({
        params: { id: parametreize(v['Title']) }
    }));

    return { paths, fallback: false };
};

const VideoSingle = ({ video }) => {
    return (
        <section className="max-w-5xl mx-auto px-2">
            <Breadcumb
                list={[
                    { href: `/videos`, name: `Videos` },
                    { href: null, name: `${video['Title']}` }
                ]}
            />
            <Header title={video['Title']} />
            <div className="mx-2">
                <VideoCard dt={video} link={video['Content Link']} />
            </div>
        </section>
    );
};

export default VideoSingle;
