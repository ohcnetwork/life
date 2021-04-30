import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { parametreize } from '@lib/utils';

const VideoCard = ({ dt, link }) => {
    const SEO = {
        title: `Life | ${dt['Title']}`,
        description: `${dt['Key Message']}`,
        openGraph: {
            title: `Life | ${dt['Title']}`,
            description: `${dt['Key Message']}`
        }
    };
    const badgeClass = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs mr-1 border-gray-800 font-medium border dark:text-gray-200 text-gray-1200`;
    return (
        <>
            <NextSeo {...SEO} />
            <Link href={link || `/videos/${parametreize(dt['Title'])}`}>
                <a>
                    <div className="my-2 p-4 border-gray-500 dark:border-gray-900 border rounded">
                        <h2 className="text-2xl tracking-tight font-bold leading-tight text-gray-1200 dark:text-white">
                            {dt.Title}
                        </h2>
                        <p className="text-gray-1200 dark:text-white my-2">{dt['Key Message']}</p>
                        <div className="mt-1">
                            <span className={badgeClass}>{dt['Material Category']}</span>
                            <span className={badgeClass}>{dt['Source of content']}</span>
                        </div>
                        <div className="mt-2 text-sm">
                            <span className=" dark:text-gray-300 text-gray-1200">
                                Language Versions :{' '}
                            </span>
                            <span className="dark:text-gray-500 text-gray-1200">
                                {dt['Language Versions']}
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default VideoCard;
