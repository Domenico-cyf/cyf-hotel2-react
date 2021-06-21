import React from "react";
import Cities from "../src/data/Cities.json";

const TouristInfoCards = () => {
  return (
    <div className="container d-flex my-4 justify-content-around">
      {Cities.map(city => (
        <div className="mx-3" key={city.id}>
          <img src={city.image} className="card-img-top h-50" alt="city" />
          <div className="d-flex flex-column justify-content-center align-items-center card-body">
            <h1>{city.title}</h1>
            <p>{city.description}</p>
            <a href={city.link} className="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
