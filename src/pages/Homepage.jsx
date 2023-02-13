import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Rooms from "../components/Rooms";
import Check from "../components/ThickServices";
import Awards from "../components/AwardsWon";
import Footer from "../components/Footer";
import '../app.css'
const Homepage = () => {
    return(
        <section>
            <Navbar />
            <Video />
            <div className="greetings">
                <p>Siamo lieti di accogliervi nel nostro B&B.</p>
                <p>Progettato per assicurarvi il massimo comfort, che siate soli, in coppia o in famiglia.</p>
                <p>Esplora le nostre stanze.</p>
            </div>
            <Rooms />
            <div className="titleServices">
              <h2 className="servicesOffered">Cosa Offriamo</h2>
              <div className="serviceGroup">
                <Check service='Angolo Cottura'/>
                <Check service='Lavatrice'/>
                <Check service='Lavastoviglie'/>
                <Check service='Studio privato'/>
                <Check service='Animali Ammessi'/>
                <Check service='Tour  riservati ai clienti'/>
                <Check service='Degustazione prodotti locali'/>
              </div>
            </div>
            <Awards />
            <Footer />
        </section>
    )
}

export default Homepage;