import { React, useState, useEffect } from 'react';
import { videoData } from '@data/video';
import VideoCard from '@components/VideoCard';
import Breadcumb from '@components/Breadcumb';
import Header from '@components/Header';
import MultiSelect from "react-multi-select-component";

export const getStaticProps = async () => {
    return {
        props: {
            videoData
        }
    };
};

const Video = ({ videoData }) => {
    const options = [
        { label: "Prevention & Safety", value: "Prevention & Safety" },
        { label: "Saathealth", value: "Saathealth" },
        { label: "Tata Trust", value: "Tata Trust" },
        { label: "CDC", value: "CDC" },
        { label: "Treatment & Recovery", value: "Treatment & Recovery" },
        { label: "Mental Health & Wellbeing", value: "Mental Health & Wellbeing" },
        { label: "Inner Hour", value: "Inner Hour" },
        { label: "Vaccination", value: "Vaccination" },
        { label: "WHO", value: "WHO" },
        { label: "Noora Health", value: "Noora Health" },
        { label: "CDC", value: "CDC" },
    ];

    const [selected, setSelected] = useState(options);
    const [data, setData] = useState(videoData);

    useEffect(() => {
        const values = selected.map(s => s.value.toLowerCase())

        const d = videoData.filter(video =>
            values.includes(video["Material Category"].toLowerCase()) ||
            values.includes(video["Source of content"].toLowerCase())
        )
        setData(d)
    }, [selected])

    return (
        <section className="max-w-5xl mx-auto px-2">
            <Breadcumb list={[{ href: null, name: 'Videos' }]} />
            <Header title="Info on COVID-19" />
            <div className="mx-auto mb-5 w-3/4">
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                    className="dark:bg-gray-900"
                />
            </div>

            <div className="flex flex-col mx-2 md:mx-6 pt-2 pl-4">
                {data.length > 0 ?
                    (data.map((el) => (
                        <VideoCard key={el.id} dt={el} />
                    )))
                    :
                    <div className="flex flex-col items-center justify-center mt-6 dark:text-gray-300">
                        <img src="/icons/noResults.svg" className="w-1/4 md:w-1/6 my-2" alt="No Data Found!" />
                        <span>No video Found</span>
                    </div>
                }
            </div>
        </section>
    );
};

export default Video;
