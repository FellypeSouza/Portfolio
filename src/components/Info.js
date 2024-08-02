import '../styles/Info.scss';
import aboutImage from '../styles/images/aboutImage.jpg';

export default function Info(){
    return(
        <section className="infoContainer">
            
            <section className="info" id="sobre">
                <section className="infoDescription">
                    <h1>Fellype Souza</h1>
                    <h3>Meu compromisso é transformar suas ideias em uma presença online poderosa e eficiente. Juntos, podemos criar 
                        uma plataforma que eleva sua marca,atrai mais visitantes e converte leads em clientes satisfeitos. Deixe-me ajudar 
                        você a alcançar o sucesso digital que seu negócio merece. Vamos começar essa jornada incrível!
                    </h3>
                    <button className="btnContact">Entre em contato!</button>
                </section>
                <section className="infoImage">
                    <img src={aboutImage} width={300} alt="image"/>
                </section>
            </section>
        </section>
    );
}