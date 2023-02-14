import React from "react";
import Navbar from "../components/Navbar";
import BurgerBarMobile from "../components/BurgerBarMobile";
import Footer from '../components/Footer'
import '../app.css'

function Error404(){
    return(
        <>
        <BurgerBarMobile />
        <Navbar />
            <h1 className="error">Attenzione, pagina non trovata! Error 404.</h1>
        <Footer />
        </>
    )
}

export default Error404;