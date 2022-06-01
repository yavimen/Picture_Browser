import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './AdminNavBar.css'
const AdminNavBar = () => {
    const [activeNavBar, setNavBar] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");
    const NavToggler = ()=>{
        activeNavBar === "nav-menu"? setNavBar("nav-menu nav-active"):setNavBar("nav-menu");
        toggleIcon==="nav-toggler"? setToggleIcon("nav-toggler toggle"):setToggleIcon("nav-toggler");
    }
    return (
        <div>
            <nav className="nav">
                <p className="nav-brand">Picha Browser</p>
                <ul className={activeNavBar}>
                    <li className="nav-item">
                        <Link to='/AdminHome'>Pictures</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/AddNewPicture'>AddPicture</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/'>Log Out</Link>
                    </li>
                </ul>
                <div onClick={NavToggler} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavBar;