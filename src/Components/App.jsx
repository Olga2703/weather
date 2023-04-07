import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import CityPage from "./CityPage.jsx";
import routes from "../routes.js";
import Layout from "./Layout.jsx";
import "../App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.homePage()} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.cityPage()} element={<CityPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
