import '../styles/Nav.scss';

export default function Nav(){
    return(
        <section className="navContainer">
            <p>Fellype Souza</p>
            <nav>
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Portfólio</a>
                <a href="#">Contato</a>
            </nav>
        </section>
    );
}