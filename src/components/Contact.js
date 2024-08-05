import "../styles/Contact.scss";
import gmailIcon from '../styles/images/gmailIcon.png';
import whatsappIcon from '../styles/images/whatsappIcon.png';
import linkedinIcon from '../styles/images/linkedinIcon.png';

const width = 40;

export default function Contact(){
    return(
        <section className="contactsContainer">
            <h1>Entre em contato hoje mesmo e vamos começar essa jornada de transformação digital!</h1>
            <section className="contacts">
                <a href="mailto:fellypedev22@gmail.com" target="_blank"><img src={gmailIcon} width={width}/></a>
                <a href="https://wa.me/5519971476004?text=" target="_blank"><img src={whatsappIcon} width={width}/></a>
                <a href="https://www.linkedin.com/in/fellype-souza-32a083261/" target="_blank"><img src={linkedinIcon} width={width}/></a>
            </section>
        </section>
    );
}