import { faArrowRight, faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"

const TextCompnent = () => {
  return (
    <div className="p-5 mx-auto">
      <div className="font-bold text-2xl md:text-4xl dark:text-gray-200">Oops! No data found</div>
      <div className="p-10 pl-0 text-sm md:text-xl dark:text-gray-400">
        The page you're looking for is now beyond our reach. Let's get you
      </div>
      <div>
        <Link href="/" >
          <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Home Page
            <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const Component404 = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-center">
        <div className="font-mono text-5xl md:text-9xl font-semibold flex items-center">
          <h1 className="flex items-center dark:text-gray-100">4</h1>
        </div>
        <div className="font-mono font-semibold flex items-center ml-16 mr-2 mt-6 h-auto">
          <h1 className="flex items-center">
            <FontAwesomeIcon
              icon={faVirus}
              size="xs"
              className="virusImg text-red-300 dark:text-primary-400"
              spin
            />
          </h1>
        </div>
        <div className="font-mono text-5xl md:text-9xl font-semibold flex items-center">
          <h1 className="font-mono text-5xl md:text-9xl font-semibold flex items-center dark:text-gray-100">4</h1>
        </div>
      </div>
    </div>
  );
};

export default function Custom404() {
  return (
    <div className="py-16 md:py-20 w-11/12 md:w-3/4 mx-auto">
      <div className="py-8">
        <div className="sm:hidden">
          <div className="items-center">
            <Component404 />
            <br />
            <TextCompnent />
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center">
            <TextCompnent />
            <Component404 />
          </div>
        </div>
      </div>
    </div>
  );
}
