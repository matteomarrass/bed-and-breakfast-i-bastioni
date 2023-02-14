import React from "react";
import '../app.css';
import CardRoom from "./CardRooms";
import Room1 from '../img/b&b1.jpg'
import Room2 from '../img/b&b2.jpg'
import Room3 from '../img/b&b3.JPEG'
import Room4 from '../img/b&b4.jpg'

function Rooms(){
    return(
        <div className="roomContainer">
            <CardRoom img={Room1} className='room' title='La Niña' description='Questa camera è ideale per una famiglia di 4 persone. Prevede tutti i comfort essenziali e non.' />
            <CardRoom img={Room2} className='room' title='La Pinta' description='Perfetta per le coppie. Prevede una vista stupenda verso la torre Espero Real.'/>
            <CardRoom img={Room3} className='room' title='La Santa Maria' description='Camera a buon prezzo, ideale per le coppie attente alle spese.'/>
            <CardRoom img={Room4} className='room' title='Suite Espero Real' description='Il nome parla da se. Una suite meravigliosa che gode di tutti i comfort.'/>
        </div>
    )
}

export default Rooms;