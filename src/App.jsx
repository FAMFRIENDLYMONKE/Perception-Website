import React from "react";
import SponserMarque from "./components/SponserMarque";
import About from "./components/About";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Events from "./Pages/Events";
import Merch from "./Pages/Merch";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout name={name} />}>
      <Route path="" element={<Home />} />
      {/* <Route path="register" element={<Register />} />
      <Route path="signin" element={<SignIn />} /> */}
      <Route path="/events" element={<Events/>} />
      <Route path="/merch" element={<Merch/>} />
      {/* <Route
        path="profile"
        element={
          localStorage.getItem("authToken") ? (
            <Profile setName={setName} />
          ) : (
            <Navigate to="/signin" />
          )
        }
      /> */}
    </Route>
  </Routes>
  );
}

export default App;
