import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderTopNavbarItem({ data }) {
  return (
    <NavLink to={data.href} exact className="header_top_navbar_item">
      <div
        className="img"
        style={{
          WebkitMaskImage: `url('./assets/images/navbaritem_${data.name}.svg')`,
        }}
      ></div>
      <p>{data.text}</p>
    </NavLink>
  );
}
