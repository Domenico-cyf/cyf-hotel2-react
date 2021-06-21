import React from "react";
import SearchButton from "./SearchButton";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import FooterInfo from "../src/data/FooterInfo.json";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <SearchButton />
      <Footer footerInfo={FooterInfo} />
    </div>
  );
};

export default App;
