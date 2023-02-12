import React from "react";
import { Link, NavLink } from 'react-router-dom';
import '../app.css'
import Logo from '../img/Logo B&B.png'

function Navbar(){
    return(
        <nav>
            <Link to='/'><img src={Logo} alt="logo-b&b" id="logo" /></Link>
            <ul className="listNavbar">
                <NavLink to='/aboutus' className='link'>Chi Siamo</NavLink>
                <NavLink to='/history' className='link'>Storia della città</NavLink>
                <NavLink to='/studies' className='link'>Tariffe e prenotazioni</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;