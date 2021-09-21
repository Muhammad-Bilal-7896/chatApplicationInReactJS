import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App'
//Material Design Bootstrap import
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
//Bootstrap import
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

