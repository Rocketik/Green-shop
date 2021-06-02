import React from "react";
import routes from "../../../routes";
import HeaderTopNavbarItem from "./HeaderTopNavbarItem";
export default function HeaderTopNavbar() {
  const items = routes;
  return (
    <div className="header_top_navbar">
      {items.map((el, i) => (
        <HeaderTopNavbarItem data={el} key={i} />
      ))}
    </div>
  );
}
