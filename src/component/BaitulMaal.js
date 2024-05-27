// # Start File App.js  19.05.2024
// LEC -----------------------------   React Router v6 tutorial in Hindi 1# getting started | installation

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
// import Page404 from "./Page404";
import User from "./User";
import Filter from "./Filter";
import ContactUs from "./ContactUs";
import Company from "./Company";
import Channel from "./Channel";
import Other from "./Other";
import Login from "./Login";
import Protected from "./Protected";
import DynamicRouting from "./DynamicRouting";
import APIGet from "./APIGet";
import PrevState from "./PrevState";
import PrevProps from "./PrevProps";
// import { Component } from "react";
// React Router v6 tutorial in Hindi #8 Navigation on Click | Navigating programmatically
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* <Route path="/home" element={<h1> Home Page</h1>} /> */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs/" element={<ContactUs />}>
            <Route path="Company" element={<Company />} />
            <Route path="Channel" element={<Channel />} />
            <Route path="Other" element={<Other />} />
          </Route>
          <Route path="/Filter" element={<Filter />}></Route>
          <Route path="/User/:name" element={<User />} />
          {/* <Route pat h="/*" element={<Page404 />} /> */}

          {/* <Route path="/*" element={<Navigate to="/" />} /> */}

          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/ContactUs/" element={<ContactUs />}>
            <Route path="Company" element={<Company />} />
            <Route path="Channel" element={<Channel />} />
            <Route path="Other" element={<Other />} />
          </Route>
          <Route path="/Filter" element={<Protected Component={Filter} />} />
          <Route path="/User/:name" element={<User />} />
          <Route path="/DynamicRouting" element={<DynamicRouting />} />
          <Route path="/APIGet" element={<APIGet />} />
          <Route path="/PrevState" element={<PrevState />} />
          <Route path="/PrevProps" element={<PrevProps />} />

          {/* <Route pat h="/*" element={<Page404 />} /> */}

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
