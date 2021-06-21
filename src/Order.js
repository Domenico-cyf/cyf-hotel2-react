import React from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orders, orderOne }) {
  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
}

export default Order;
