import React from "react";
import Navbar from "../components/Navbar";
import Video from '../components/Video';
import BurgerBarMobile from "../components/BurgerBarMobile";
import Footer from "../components/Footer";
import Founder from '../img/paoloMarras.jpg';


function AboutUs(){
    return(
        <>
        <BurgerBarMobile />
        <Navbar />
        <Video />
            <div className="greetings">
                <p>Il nostro B&B vanta una storia di passione. Di cultura. Di amore.</p>
                <p>E noi siamo quì per raccontarvela.</p>
                <div className="groupBio">
                    <img src={Founder}/>
                    <div className="descriptionBio">
                        <p>Paolo Marras era un ragazzo nato e cresciuto ad Alghero, in Sardegna. E' sempre cresciuto con un grosso amore per il posto che lo ha cresciuto. Già nelle sue prime esperienze inizia a lavorare nel mondo del turismo e, invecchiando, realizza che avrebbe voluto fare di più per poter contribuire all'economia della sua città. Avrebbe voluto avere un b&b che non dia solo un posto ai turisti dove poter stare, ma che possa anche mostrar loro la sua cultura e storia.</p>
                        <p>Con questa idea nella testa, Paolo inizia a cercare la location perfetta per il suo B&B. Dopo un estenuante ricerca, finalmente trovò una vecchia costruzione localizzata nel cuore della città. E' stata abbandonata da diversi anni e aveva bisogno di diversi rinnovamenti, però Paolo ha visto il suo potenziale ed era pronto a darle nuova vita.</p>
                        <p>Nei mesi sucessivi, Paolo lavorò allo stremo delle sue forze per rinnovare la struttura e trasformarla nel meraviglioso B&B nella quale abbiamo l'onore di ospitarvi. Lo chiamò 'I Bastioni', questo nome fù scelto perchè la struttura è localizzata vicino le antiche mura della città, questo riflette la tradizione e la storicità della città, facendola combaciare perfettamente con il B&B.</p>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default AboutUs;