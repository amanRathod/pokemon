import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoutIcon } from '@heroicons/react/solid';
import * as ROUTES from '../../constants/routes';
import DarkMode from '../public/dark_mode';
import Search from './search';

const Header = ({ handleChange }) => {
  const history = useHistory();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      history.push(ROUTES.LOGIN);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    history.push(ROUTES.HOME);
  };

  return (
    <header className="header">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className=" text-center row cursor-pointer mt-2 mr-2 sm:block">
            <Link onClick={handleClick} className="ml-3 text-lg sm:text-3xl underline-link">
              Pokemon
            </Link>
          </div>
          <div>
            <Search handleChange={handleChange} />
          </div>
          <div className="text-center row">
            <button type="submit" className="focus:outline-none underline-link mt-2">
              <img
                className=" rounded-full h-8 w-8 mr-2 ml-2 flex"
                src="https://bucket-007.s3.ap-south-1.amazonaws.com/default.jpg"
                alt="loading..."
              />
            </button>
            <button
              type="submit"
              className="focus:outline-none underline-link mt-2 text-grey-seven"
            >
              <LogoutIcon onClick={handleLogout} className="rounded-full h-8 w-8 mr-2 ml-2 flex" />
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  handleChange: PropTypes.func.isRequired
};
