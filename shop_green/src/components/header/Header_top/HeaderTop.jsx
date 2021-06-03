import React from "react";
import HeaderTopNavbar from "./HeaderTopNavbar";
import HeaderTopSelectItem from "./HeaderTopSelectItem";
import ukFlag from "../../../assets/images/select-flags_uk.svg";
import russiaFlag from "../../../assets/images/select-flags_russia.svg";
import armeniaFlag from "../../../assets/images/select-flags_armenia.svg";
import ukValet from "../../../assets/images/select-valet_dollar.svg";
import russiaValet from "../../../assets/images/select-valet_ruble.svg";
import armeniaValet from "../../../assets/images/select-valet_dram.svg";

const config = [
  {
    withImage: true,
    name: "flags",
    items: [
      {
        value: "uk",
        label: "English",
        icon: ukFlag,
      },
      {
        value: "armenia",
        label: "Armenian",
        icon: armeniaFlag,
      },
      {
        value: "russia",
        label: "Russian",
        icon: russiaFlag,
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
        icon: ukValet,
      },
      {
        value: "dram",
        label: "Dram",
        icon: armeniaValet,
      },
      {
        value: "ruble",
        label: "Ruble",
        icon: russiaValet
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
