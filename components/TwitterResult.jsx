import TimeAgo from 'timeago-react';
import PulseIcon from '@components/icons/PulseIcon';
import NoResultFound from './NoResultFound';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TwitterResultCard({ covidConnectResults, searchStr, loading }) {

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
                                    {covidConnectResults.map((result, id) => (

                                          <div key={id} className="flex justify-start text-gray-700  bg-gray-200 dark:bg-gray-1100 whitespace-pre-wrap  rounded-md px-2 py-2 my-2">

                                                <div className="px-2 w-full">
                                                  <div className="flex flex-row justify-between text-sm my-1 dark:text-primary-400 font-normal text-black-500 tracking-wide">
                                                    <TimeAgo
                                                      datetime={result.created_at}
                                                    />
                                                    <span className="pb-1 text-sm font-semibold text-gray-700 mb-2">
                                                      <FontAwesomeIcon icon={faTwitter} />
                                                      <a
                                                        href={`https://twitter.com/i/web/status/${result.id_str}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        key={result.id_str}
                                                        className="ml-2">
                                                      Open in Twitter
                                                      </a>
                                                    </span>
                                                  </div>
                                                  
                                                    <div className="flex-grow text-black dark:text-white font-semibold">
                                                      {result.full_text}
                                                    </div>

                                                </div>

                                            </div>
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
