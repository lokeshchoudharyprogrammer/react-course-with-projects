import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Insta from "./Insta";
import { Mail } from "./Mail";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route index element={<Insta />}></Route>
          <Route path="insta" element={<Insta />}></Route>
          <Route path="mail" element={<Mail />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
