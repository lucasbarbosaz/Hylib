import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthService from './services/AuthService';

var xhttp = new XMLHttpRequest();
var configuration = {};
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    configuration = JSON.parse(xhttp.responseText);
    axios.defaults.baseURL = configuration.apiUrl;

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // Check the response for an invalid JWT token error
        if (error.response.status === 401 && error.response.data.error === 'Invalid token') {
          // Remove JWT token from local storage
          AuthService.logout();
          
          // Redirect the user to the login page
          window.location.href = '/logout';
        }
      }
    )
    ReactDOM.render(
      <React.StrictMode>
        <App config={JSON.stringify(configuration)} />
      </React.StrictMode>
      , document.getElementById('root'));
  }
};
xhttp.open("GET", `${process.env.PUBLIC_URL}/configuration.json?v${Math.random()}`, true);
xhttp.send();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
