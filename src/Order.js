import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ type }) {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <li>
        {type}: {orders} <RestaurantButton orderOne={orderOne} />
      </li>
    </div>
  );
}

export default Order;
