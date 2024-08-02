import '../styles/Nav.scss';

export default function Nav(){
    return(
        <section className="navContainer" id="inicio">
            <p>Fellype Souza</p>
            <nav>
                <a href="#inicio">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#portfolio">Portfólio</a>
                <a href="#">Contato</a>
            </nav>
        </section>
    );
}