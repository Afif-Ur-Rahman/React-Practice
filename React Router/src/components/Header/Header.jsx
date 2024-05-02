import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [followers, setFollowers] = useState(0);
  const facebookFollowers = async () => {
    const response = await fetch("https://api.github.com/users/afif-Ur-Rahman");
    const data = await response.json();
    console.log(data);
    setFollowers(data.followers || 0);
  };

  useEffect(() => {
    facebookFollowers();
  }, []);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="#" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div>Github Followers: {followers}</div>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="border-solid border-2 bg-orange-700 border-orange-700 rounded-3xl hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `p-2 block duration-200 ${
                      isActive ? "text-orange-700 bg-white" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-orange-700 rounded-3xl`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `p-2 block duration-200 ${
                      isActive ? "text-orange-700 bg-white" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-orange-700 rounded-3xl`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `p-2 block duration-200 ${
                      isActive ? "text-orange-700 bg-white" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-white lg:border-0 hover:text-orange-700 rounded-3xl`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
