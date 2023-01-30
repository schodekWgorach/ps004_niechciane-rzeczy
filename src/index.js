import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
import Logging from "./components/home/Logging";
import LoggedIn from "./components/home/LoggedIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rejstracja" element={<LoggedIn />} />
                  <Route path="/logowanie" element={<Logging />} />
          </Routes>
      </BrowserRouter>
);
