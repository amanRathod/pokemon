/* eslint-disable no-empty-function */
import axios from 'axios';
import jwt from 'jwt-decode';

const url = 'https://pokemon-favourite.herokuapp.com/api/v1/user';

const token = localStorage.getItem('token');
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

// check if token time is expired or not
const isTokenExpired = () => {
  if (token) {
    const decoded = jwt(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return true;
    }
    return false;
  }
  return true;
};

// if token is expired, logout user
const checkTokenExpired = () => {
  if (isTokenExpired()) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
};

// function to check expire-time of token
checkTokenExpired();

export async function addFavourite(name) {
  try {
    const state = {
      name
    };
    const response = await axios.put(`${url}/favourite`, state, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUserData() {
  try {
    const response = await axios.get(`${url}/getUserData`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
