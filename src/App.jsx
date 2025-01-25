import React from "react";
import SponserMarque from "./components/SponserMarque";
import About from "./components/About";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Events from "./Pages/Events";
import Merch from "./Pages/Merch";
import FlagshipEvents from "./Pages/FlagshipEvents";
import Card from "./components/Card";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout name={name} />}>
        <Route path="" element={<Home />} />
        {/* <Route path="/events" element={<Card />} /> */}
        <Route path="/merch" element={<Merch />} />
        <Route path="/events" element={<FlagshipEvents />} />
      </Route>
    </Routes>
  );
}

export default App;
