import React, { useContext, useEffect, useState } from "react";
import './Header.scss';
import NavList from "./NavList/NavList";
import { AuthContext } from "../../context/AuthContext";
const Header = () =>  {
    const [links, setLinks] = useState([]);
    const auth = useContext(AuthContext);
    console.log("🚀 ~ Header ~ auth:", auth)
    useEffect(() => {
        if(!auth.isAuthenticated){
            setLinks(["registration","signin"]);
        }
        if(auth.isAuthenticated){
            setLinks(["dashboard","account","transaction","statistic","gamefication"])
        }
    },[]);
    return (
        <header className="header__container">
             <NavList items={links}/>
        </header>
    );
}

export default Header;