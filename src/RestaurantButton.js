import React from "react";

function RestaurantButton({ orderOne }) {
  return (
    <div>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
