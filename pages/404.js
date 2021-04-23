import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextCompnent = () => {
  return (
    <div className="p-5 mx-auto">
      <div className="font-bold text-2xl md:text-4xl">Oops! No data found</div>
      <div className="p-10 pl-0 text-sm md:text-xl">
        The page you're looking for is now beyond our reach. Let's get you
      </div>
      <div>
        <a
          href="/"
          className="text-sm lg:text-base underline font-bold text-gray-600 hover:text-black hover:shadow-lg p-3"
        >
          HOME PAGE
        </a>
      </div>
    </div>
  );
};

const Component404 = () => {
  return (
    <div>
      <div className="flex items-center text-center justify-center">
        <div className="font-mono text-5xl md:text-9xl font-semibold flex items-center">
          <h1 className="flex items-center">4</h1>
        </div>
        <div className="font-mono font-semibold flex items-center ml-16 mr-2 mt-6 h-auto">
          <h1 className="flex items-center">
            <FontAwesomeIcon
              icon={faVirus}
              size="xs"
              className="virusImg text-red-300"
              spin
            />
          </h1>
        </div>
        <div className="font-mono text-5xl md:text-9xl font-semibold flex items-center">
          <h1 className="font-mono text-5xl md:text-9xl font-semibold flex items-center">4</h1>
        </div>
      </div>
    </div>
  );
};

export default function Custom404() {
  return (
    <div className="mt-10 md:mt-40 w-11/12 md:w-3/4 mx-auto">
      <div className="pt-2">
        <div className="sm:hidden">
          <div className="items-center">
            <Component404 />
            <br/>
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
