import React, { useState } from "react";
import "./HeaderTopSelectItem.scss";


export default function QuestionComponent({ data }) {

  const [open, setOpen] = useState(false);
  const [opened, setBefore] = useState(false);
  const [flag, setFlag] = useState(data.items[0].icon);


  return (
    <div className="_conteiner">
      <div
        className="_content"
        onClick={() => {
          setOpen(!open);
          setBefore(!opened);
        }}
      >
        <div>
          <div className="titleContent">
            <img src={flag} alt="" className="flag"/>
            <span>{data.name}</span>
          </div>
        </div>
        <div className={open ? "open" : "close"}>
          {data.items.map((el, i) => {
            return (
              <li
                key={i}
                value={el.value}
                onClick={() => {
                  setFlag(el.icon);
                }}
              >
                {/* <img src={el.flag} alt="" /> */}
                {el.label}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
