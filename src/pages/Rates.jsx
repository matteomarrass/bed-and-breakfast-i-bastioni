import React from "react";
import Navbar from "../components/Navbar";
import Video from '../components/Video';
import Rooms from '../components/Rooms'
import Footer from "../components/Footer";

function Rates(){
    return(
        <>
        <Navbar />
        <Video />
        <Rooms />
            <div className="rates">
                <p>Camera La Niña (Quadrupla): 100€ per notte</p>
                <p>Camera La Pinta (Matrimoniale): 70€ per notte</p>
                <p>Camera La Santa Maria (Matrimoniale): 60€ per notte</p>
                <p>Camera La Niña (Matrimoniale): 180€ per notte</p>
            </div>
            <h2 className="ratesTitle">Per informazioni e prenotazioni compila il seguente form!</h2>
            <div className="formRates">
                <form action="">
                    <label htmlFor="fname">Nome:</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="lname">Cognome:</label>
                    <input type="text" id="lname" name="lname" />
                    <label htmlFor='start'>Giorno Arrivo</label>
                    <input type='date' id="start" placeholder="dd-mm-yyyy"/>
                    <label htmlFor='end' id="out">Giorno Partenza</label>
                    <input type='date' id="out" placeholder="dd-mm-yyyy"/>
                    <label htmlFor="persons">Persone: </label>
                    <select name="persons" id="persons">
                       <option>1</option>
                       <option>2</option>
                       <option>3</option>
                       <option>4</option>
                    </select>
                    <input type="submit" value="Richiedi ora!" id="submit"/>
                </form>
            </div>
        <Footer />
        </>
    )
}

export default Rates;