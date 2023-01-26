import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
import Logging from "./components/home/Logging";
import Register from "./components/RegisteringAndLogging/Register";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Logging" element={<Logging />} />
              <Route path="/Register" element={<Register />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
