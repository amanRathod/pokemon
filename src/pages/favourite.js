/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, FavList  } from '../components/private';

const Favourite = () => {
  const location = useLocation();
  const [favourite] = useState(location.state ? location.state.data : '');

  return (
    <div className="bg-blue-50  overflow-y-hidden dark:bg-darkMode-base">
      <Header />
      <FavList  data={favourite} />
    </div>
  );
};

export default Favourite;
