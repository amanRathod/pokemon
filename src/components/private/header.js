import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../public/dark_mode';
import Search from './search';

// eslint-disable-next-line react/prop-types
const Header = ({ handleChange }) => {
  const history = useHistory();
  // const decode = jwt(localStorage.getItem('token'));

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="h-16 bg-headerWhite  dark:bg-darkMode-base dark:text-blue-two text-blue-base border-gray-base shadow-md  border-b ">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className=" text-center row cursor-pointer mt-2 mr-2 ">
            <Link to={ROUTES.HOME} className="ml-3 text-lg sm:text-3xl underline-link">
              Pokemon
            </Link>
          </div>
          <div>
            <Search handleChange={handleChange} />
          </div>
          <div className="text-center row">
            <button type="submit" className="focus:outline-none underline-link mt-2">
              <img
                className=" rounded-full h-8 w-8 mr-2 flex"
                src="https://bucket-007.s3.ap-south-1.amazonaws.com/default.jpg"
                alt="loading..."
              />
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
