import React from "react";
import'../app.css';
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import pinterest from '../img/pinterest.png'
import tiktok from '../img/tik-tok.png'

function Footer(){
    return(
        <section className="footer">
            <footer>
                <div className="socialNetwork">
                  <img src={facebook}/>
                  <img src={instagram}/>
                  <img src={pinterest}/>
                  <img src={tiktok}/>
                </div>
                <div className="address">
                  <h2>Dove ci puoi trovare?</h2>
                  <p>Piazza Sulis, 20</p>
                  <p>Alghero (SS) 07041</p>
                  <p>Contatti per info e prenotazioni nella sezione apposita.</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer;