import '../styles/HeadLine.scss';
import gmailIcon from '../styles/images/gmailIcon.png';
import whatsappIcon from '../styles/images/whatsappIcon.png';
import linkedinIcon from '../styles/images/linkedinIcon.png';

export default function HeadLine(){
    const width = 40;
    return(
        <section className="headLineContainer">
            <h1>Desenvolvedor Frontend</h1>
            <h3>Transforme sua visão em <b className="emphasis">realidade digital</b>. Sites incríveis, <b className="emphasis">resultados excepcionais</b>. Tem algum projeto em mente? Entre em contato!</h3>
            <a href="mailto:fellypedev22@gmail.com" target="_blank"><img src={gmailIcon} width={width}/></a>
            <a href="https://wa.me/5519971476004?text=" target="_blank"><img src={whatsappIcon} width={width}/></a>
            <a href="https://www.linkedin.com/in/fellype-souza-32a083261/" target="_blank"><img src={linkedinIcon} width={width}/></a>
        </section>
    );
}