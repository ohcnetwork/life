import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextCompnent = () => {
  return (
    <div className="p-5 mx-auto">
      <div className="font-bold text-4xl">Oops! No data found</div>
      <div className="p-10 pl-0 text-xl">
        The page you're looking for is now beyond our reach. Let's get you
      </div>
      <div>
        <a
          href="/"
          className="underline font-bold text-gray-600 hover:text-black hover:shadow-lg p-3"
        >
          HOME PAGE
        </a>
      </div>
    </div>
  );
};

const Component404 = () => {
  return (
    <div className="error_404_lettersBox">
      <div className="error_404_letters flex">
        <div className="error_404_letter4 error_404_letter">
          <h1 className="txt404">4</h1>
        </div>
        <div className="error_404_letter0 error_404_letter ml-16 mr-2 mt-6">
          <h1 className="txt404">
            <FontAwesomeIcon
              icon={faVirus}
              className="virusImg mx-auto text-9xl"
            />
          </h1>
        </div>
        <div className="error_404_letter4 error_404_letter">
          <h1 className="txt404">4</h1>
        </div>
      </div>
    </div>
  );
};

export default function Custom404() {
  return (
    <div>
      <div className="pt-56">
        <div className="sm:hidden">
          <div className="items-center">
            <Component404 />
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
