import React from "react";
import Navbar from "../components/Navbar";
import Video from '../components/Video';
import BurgerBarMobile from "../components/BurgerBarMobile";
import Footer from "../components/Footer";
import img1 from '../img/Alghero2.jpg';
import img2 from '../img/Alghero3.jpg'; 

function History(){
    return(
        <>
        <BurgerBarMobile />
        <Navbar />
        <Video />
            <div className="greetings">
                <p>La nostra storia. I nostri profumi.</p>
                <div className="cityBio">
                    <div className="imagesCity">
                      <img src={img1} alt='imgAlghero'/>
                      <img src={img2} alt='imgAlghero'/>
                    </div>
                    <div className="descriptionCity">
                    <p>L’anno di fondazione di Alghero non è storicamente certa. Quella più accreditata la fa risalire al 1102 ad opera della famiglia genovese Doria che la popolarono inizialmente con un piccolo gruppo di liguri.</p>
                    <p>Nel 1353 Alghero fu occupata dagli aragonesi dopo la vittoria riportata nella battaglia navale di Porto Conte che vide i genovesi soccombere contro la flotta di Bernardo Cabrera alleato, per l’occasione, con i veneziani. Dopo qualche giorno, in assenza dell’ammiraglio Cabrera in navigazione verso Cagliari, gli algheresi notte tempo si sollevarono e riuscirono a trucidare la guarnigione aragonese restituendo la città ai Doria.</p>
                    <p>Dal sito in cui sorse, s'Alighera, che in sardo logudorese significa luogo d'alghe, venne il nome della città, che si latinizzò in Algarium e in catalano si disse Alguer.</p>
                    <p>Non sono più in molti a parlarlo, il catalano di Alghero, più o meno ventimila persone, ma in molti ne discutono, da anni, così come nel resto della Sardegna si discute di lingua sarda: progetti istituzionali di conservazione e valorizzazione della lingua si uniscono a iniziative di associazioni di volontariato. Dal 2009, due portoni dopo il municipi, è aperta una rappresentanza del governo catalano: l’Espai Lull. Dagli anni settanta operano diverse associazioni: l’Obra Cultural, l’Omnia Cultural, l’Ateneu alguerès. C’è una scuola di lingua, l’Escola de alguerés Pasqual Scanu, con centinaia di iscritti ogni anno. </p>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default History;