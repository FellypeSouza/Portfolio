import "../styles/Portfolio.scss";
import website1 from "../styles/images/website1.png";
import website2 from "../styles/images/website2.png";
import landingPage1 from "../styles/images/website3.png";
import landingPage2 from "../styles/images/website4.png";
import empty from "../styles/images/empty.jpg";


export default function Portfolio(){
    return(
        <section className="portfolioContainer" id="portfolio">
            <section className="portfolios">
                <section className="websites">
                    <h1>Websites<hr/></h1>
                    <a href="https://fellypesouza.github.io/CloneSitePorsche/" target="_blank" className="pItem">
                        <img src={website1} width={400}/>
                    </a>
                    <a href="https://fellypesouza.github.io/Ecommerce/" target="_blank" className="pItem">
                        <img src={website2} width={400}/>
                    </a>
                    <a  className="pItem">
                        <img src={empty} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>   
                </section>
                <section className="landingPages">
                    <h1>Landing Pages<hr/></h1>
                    <a href="https://fellypesouza.github.io/Landing-Page--Curso-Dev/" target="_blank" className="pItem">
                        <img src={landingPage1} width={400}/>
                    </a>
                    <a href="https://fellypesouza.github.io/Landing-Page--MK-Digital/" target="_blank" className="pItem">
                        <img src={landingPage2} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>   
                </section>
                <section className="webApps">
                    <h1>Web Apps<hr/></h1>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>
                    <a className="pItem">
                        <img src={empty} width={400}/>
                    </a>   
                </section>
            </section>
            
        </section>
    );
}