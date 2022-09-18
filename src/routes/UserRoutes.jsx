// need install - npm i react-router-dom
// need install jwtDecode  (read the tokenBack from bd and decode)

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocateDevice } from "../pages/LocateDevice";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";
import { NavbarReactBootstrap } from "../pages/NavbarReactBootstrap";
import { Devices } from "../pages/Devices";

const UserRoutes = () => {
  // const [token, setToken] = useState();
  // const [userType, setUserType] = useState();

  return (
    <BrowserRouter>
      <NavbarReactBootstrap/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/locatedevice" element={<LocateDevice/>} />
        <Route path="/devices" element={<Devices/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default UserRoutes;
