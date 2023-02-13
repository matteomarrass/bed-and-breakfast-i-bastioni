import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Founder from '../img/paoloMarras.jpg'


function AboutUs(){
    return(
        <>
        <Navbar />
            <div className="greetings">
                <p>Il nostro B&B vanta una storia di passione. Di cultura. Di amore.</p>
                <p>E noi siamo quì per raccontarvela.</p>

            </div>
        <Footer />
        </>
    )
}

export default AboutUs;