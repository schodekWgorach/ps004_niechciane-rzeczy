import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
/*import Logging from "./components/home/Logging";*/
/*import LoggedIn from "./components/home/LoggedIn";*/
import Step1 from "./components/Steps/Step1";
import Register from "./components/RegisteringAndLogging/Register";
import Login from "./components/RegisteringAndLogging/Login";
/*import Logout from "./components/RegisteringAndLogging/Logout";*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rejestracja" element={<Register />} />
                  <Route path="/logowanie" element={<Login />} />
                  <Route path="/oddaj-rzeczy" component={<Step1 />} />
        {/*          <Route path="/logowanie" component={<Login />} />*/}
{/*                  <Route path="/rejestracja" component={<Register />} />*/}
{/*                  <Route path="/wylogowano" component={<Logout />} />*/}
          </Routes>
      </BrowserRouter>
);
