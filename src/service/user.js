/* eslint-disable no-empty-function */
import axios from 'axios';
import jwt from 'jwt-decode';

const url = 'http://localhost:5000/api/v1/user/';

const token = localStorage.getItem('token');
const decode = jwt(localStorage.getItem('token'));

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
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    console.log('config', config);
    const response = await axios.put(`${url}/favourite/${name}/${decode.id}`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function GetUserData() {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    console.log('con', config);
    const response = await axios.get(`${url}/${decode.id}`, config);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
