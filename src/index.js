import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

var xhttp = new XMLHttpRequest();
var configuration = {};
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    configuration = JSON.parse(xhttp.responseText);
    axios.defaults.baseURL = configuration.apiUrl;
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
