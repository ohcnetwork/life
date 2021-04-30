import { parseDateString } from '@lib/utils';
import PulseIcon from '@components/PulseSvg';
import NoResultFound from './NoResultFound';

function TwitterResultCard({ covidConnectResults, searchStr, loading }) {
    console.log(searchStr);
    return (
        <div className="w-full mx-auto" key="TwitterResultCard">
            <div className="flex justify-center ">
                <div className="w-full bg-white dark:bg-gray-1200 shadow-md  ">
                    <div className="px-1 py-2 mb-4">
                        <div className="block text-gray-700 dark:text-primary-400 text-lg font-semibold py-2 px-3">
                            Live Twitter Results for "{searchStr}"
                        </div>
                        <div className="py-3 text-sm px-2">
                            {covidConnectResults.length > 0 ? (
                                <>
                                    <p className="ml-2 text-gray-700">
                                        Showing {covidConnectResults.length} Results
                                    </p>
                                    {covidConnectResults.map((result) => (
                                        <a
                                            href={`https://twitter.com/i/web/status/${result.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={result.id}>
                                            <div className="flex justify-start cursor-pointer text-gray-700  bg-gray-200 dark:bg-gray-1100 whitespace-pre-wrap  rounded-md px-2 py-2 my-2">
                                                <div className="px-2">
                                                    <div className="text-sm dark:text-primary-400 font-normal text-black-500 tracking-wide">
                                                        {parseDateString(result.created_at)}
                                                    </div>
                                                    <div className="flex-grow text-black dark:text-white font-semibold">
                                                        {result.text}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </>
                            ) : loading ? (
                                <div className="pl-3 text-center dark:text-gray-500">
                                    <PulseIcon className="inline stroke-current ml-2 " width={30} />
                                    <p>Fetching Recent Tweets..</p>
                                </div>
                            ) : (
                                <div className="pl-3 text-lg dark:text-gray-500">
                                    <NoResultFound type="Tweets" text={searchStr} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwitterResultCard;
