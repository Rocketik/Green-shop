import React from "react";
// import Selectik from '../../lib/Selectik';
import "../../lib/selectik.css"
export default function HeaderTopSelectItem({data}) {
  return (
    <div className="header_top_select_item">
      
      {data.map((el,i)=>{
        return <p>lox</p>
      })}
         
    </div>
  );
}
