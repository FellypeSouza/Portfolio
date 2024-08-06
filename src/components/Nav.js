import '../styles/Nav.scss';

export default function Nav(){
    return(
        <section className="navContainer" id="inicio">
            <p>Fellype Souza</p>
            <nav>
                <a rel="noreferrer" href="#inicio">Início</a>
                <a rel="noreferrer" href="#sobre">Sobre</a>
                <a rel="noreferrer" href="#portfolio">Portfólio</a>
                <a rel="noreferrer" href="#contato">Contato</a>
            </nav>
        </section>
    );
}