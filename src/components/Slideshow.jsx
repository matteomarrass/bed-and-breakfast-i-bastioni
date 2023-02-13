import React from "react";
import { Link, NavLink } from 'react-router-dom';
import '../app.css'
import VideoHomepage from '../img/VideoHomePage.mp4'

function Video(){
    return(
        <section>
            <video width='1920px' height='700px' className="videoShow" autoPlay loop muted>
                <source src={VideoHomepage} type='video/mp4'/>
            </video>
            <div className="overlay">
                <h2>B&B I Bastioni</h2>
                <p>Un sogno diventato realtà.</p>
            </div>
        </section>
    );
}

export default Video;