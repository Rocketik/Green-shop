import React from 'react'
import { NavLink } from "react-router-dom";

export default function HeaderTopNavbarItem({data}) {
    return (
        <li className="header_top_navbar_item">
            <div className="img" style={{backgroundImage:`url('../../../assets/images/navbaritem_${data.name}.svg')`}}></div>
            <NavLink to={data.href} exact={data.exact} >{ data.text }</NavLink>
        </li>
    )
}
 