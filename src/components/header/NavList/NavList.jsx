import React from "react";
import { Link, NavLink } from "react-router-dom";
import './NavList.scss';

const NavList = (props) => {
    const {items} = props;
    const itemsArray = items.map((item,index) => {
            return  <li className="link__wrapper" key={index} >
                        <NavLink className="link__wrapper-item" to={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</NavLink>
                    </li>
    	});
    return(
        <ul className="links__container">
            {itemsArray}
        </ul>
    );
}
export default NavList;