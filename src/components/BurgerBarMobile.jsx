import React from "react";
import '../app.css'
import { Link, NavLink } from "react-router-dom";
function BurgerBarMobile(){
    return(
        <>
        <header className="headerMobile">
            <a href="#" className="logoMobile">Home</a>
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
            <nav className="navMobile">
                <ul className="menu">
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/aboutus'><li>Chi Siamo</li></NavLink>
                    <NavLink to='/history'><li>Storia della città</li></NavLink>
                    <NavLink to='/rates'><li>Tariffe e prenotazioni</li></NavLink>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default BurgerBarMobile;