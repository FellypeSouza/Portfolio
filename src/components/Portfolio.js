import "../styles/Portfolio.scss";
import website1 from "../styles/images/website1.png";

export default function Portfolio(){
    return(
        <section className="portfolioContainer" id="portfolio">
            <section className="portfolios">
                <section className="portfolio">
                    <h1>Websites</h1>
                    <a>
                        <img src={website1} width={300}/>
                    </a>
                </section>
            </section>
        </section>
    );
}