import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function NotFound() {
    const navigate = useNavigate();
    const GoBack = () => {
        navigate(-1);
    }

  return (
    <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10" style={{height: "50vh"}}>
      <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
        <div>
          <p className="mt-6 text-sm font-semibold text-black">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex items-center lg:order-2 mt-4">
            <Link
              onClick={() => GoBack()}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
            >
              <FaArrowLeft size={16} className="mr-2" />
              Go back
            </Link>
            <Link
            to="/contact"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
