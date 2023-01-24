import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
import Logging from "./components/home/Logging";
import Login from "./components/RegisteringAndLogging/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Logging" element={<Logging />} />
              <Route path="/LoggedIn" element={<Logging />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
