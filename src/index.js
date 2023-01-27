import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
import Logging from "./components/home/Logging";
import Register from "./components/RegisteringAndLogging/Register";
import Login from "./components/RegisteringAndLogging/Login";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rejestracja" element={<Register />} />
                  <Route path="/logging" element={<Login />} />
          </Routes>
      </BrowserRouter>
);
