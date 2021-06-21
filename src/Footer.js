import React from "react";

function Footer({ footerInfo }) {
  return (
    <div className="footer">
      <ul className="footer-list">
        {footerInfo.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
