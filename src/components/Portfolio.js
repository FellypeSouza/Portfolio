import "../styles/Portfolio.scss";
import website1 from "../styles/images/website1.png";
import website2 from "../styles/images/website2.png";
import landingPage1 from "../styles/images/website3.png";
import landingPage2 from "../styles/images/website4.png";

const portfolioImage = document.getElementById("portfolioImage");


export default function Portfolio(){
    return(
        <section className="portfolioContainer" id="portfolio">
            <section className="portfolios">
                <section className="websites">
                    <h1>Websites<hr/></h1>
                    <a id="portfolioImage" href="" className="pItem">
                        <img src={website1} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={website2} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={website1} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={website2} width={400}/>
                    </a>   
                </section>
                <section className="landingPages">
                    <h1>Landing Pages<hr/></h1>
                    <a href="" className="pItem">
                        <img src={landingPage1} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={landingPage2} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={landingPage1} width={400}/>
                    </a>
                    <a href="" className="pItem">
                        <img src={landingPage2} width={400}/>
                    </a>   
                </section>
            </section>
        </section>
    );
}