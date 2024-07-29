import '../styles/About.scss';
import aboutImage from '../styles/images/aboutImage.jpg';

export default function About(){
    return(
        <section className="aboutContainer">
            <section className="aboutContent">
                <section className="aboutImage">
                    <img src={aboutImage} width={200} heigth={100}/>
                </section>
                <section className="aboutResume">
                    <h1>Você merece um site que não apenas impressione, mas que realmente <b className="emphasis">faça a diferença</b> para o seu negócio. 
                        Com minha expertise em desenvolvimento frontend, crio <b className="emphasis">experiências digitais inovadoras</b> que capturam a essência 
                        da sua marca e envolvem seus clientes. Desde a concepção até a implementação, cada detalhe é <b className="emphasis">cuidadosamente 
                        planejado</b> para garantir que seu site seja <b className="emphasis">visualmente deslumbrante</b>, intuitivo e altamente funcional.
                    </h1>
                </section>
            </section>
            <hr/>
            <section className="aboutInfo">
                <h1>Meu compromisso é transformar suas ideias em uma presença online poderosa e eficiente. Juntos, podemos criar uma plataforma que <b className="emphasis">eleva</b> sua marca, 
                    <b className="emphasis">atrai</b> mais visitantes e converte leads em clientes satisfeitos. Deixe-me ajudar você a alcançar o <b className="emphasis">sucesso digital</b> que seu negócio merece. Vamos começar essa jornada incrível!
                </h1>
                <section className="btnContainer">
                    <a href="https://wa.me/5519971476004?text=" target="_blank"><button className="btnContact">Entre em contato!</button></a>
                </section>
            </section>
        </section>
    );
}