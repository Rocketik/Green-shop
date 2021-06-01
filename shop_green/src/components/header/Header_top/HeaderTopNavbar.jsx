import React from 'react'
import routes from '../../../routes';
import HeaderTopNavbarItem from './HeaderTopNavbarItem';
export default function HeaderTopNavbar() {
    const items = routes;
    return (
        <ul className="header_top_navbar">
            {items.map(el=> <HeaderTopNavbarItem data={el} />)}
        </ul>
    )
}
