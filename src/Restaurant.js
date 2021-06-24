import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
import orderType from "../src/data/OrderType";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orderType.map((type, index) => (
          <Order key={index} type={type} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
