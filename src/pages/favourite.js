import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, FavList } from '../components/private';

const Favourite = () => {
  const location = useLocation();
  const [favourite] = useState(location.state ? location.state.data : '');
  console.log('fafa', favourite);

  return (
    <div className="bg-blue-50 h-full dark:bg-darkMode-base">
      <Header />
      <FavList data={favourite} />
    </div>
  );
};

export default Favourite;
