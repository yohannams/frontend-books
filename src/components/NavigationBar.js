import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Cookies from "js-cookie";

const NavigationBar = () => {
  let navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    Cookies.remove("token");
    Cookies.remove("user");
  };

  return (
    <div className="w-1/2 mx-auto">
      <Navbar fluid={true} rounded={true} className="mx-auto">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Navbar.Toggle />
          <Navbar.Collapse className="mx-auto">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="mr-2">
                <Link
                  to="/"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/books"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Books
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  to="/categories"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Categories
                </Link>
              </li>
              {Cookies.get("token") && (
                <li className="mr-2">
                  <span
                    onClick={logout}
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Logout
                  </span>
                </li>
              )}
              {!Cookies.get("token") && (
                <li className="mr-2">
                  <Link
                    to="/login"
                    className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
