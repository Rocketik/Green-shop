import React from "react";
import HeaderTopNavbar from "./HeaderTopNavbar";
import HeaderTopSelectItem from "./HeaderTopSelectItem";

const config = [
  {
    withImage: true,
    name: "flags",
    items: [
      {
        value: "uk",
        label: "English",
      },
      {
        value: "armenia",
        label: "Armenian",
      },
      {
        value: "russia",
        label: "Russian",
      },
    ],
  },
  {
    withImage: true,
    name: "valet",
    items: [
      {
        value: "doller",
        label: "Doller",
      },
      {
        value: "dram",

        label: "Dram",
      },
      {
        value: "ruble",
        label: "Ruble",
      },
    ],
  },
];
export default function HeaderTop() {
  return (
    <div className="header_top  container-visitor_parent">
      <div className="container-visitor">
        <HeaderTopNavbar />
        <div className="header_top_select">
          {config.map((el, i) => {
            return <HeaderTopSelectItem data={el} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
