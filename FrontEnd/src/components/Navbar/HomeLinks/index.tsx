import { Link } from 'react-router-dom';

export const HomeLinks = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active"
                    id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Sobre Nós</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/quem-somos" className="dropdown-item">Quem Somos</Link></li>
                    <li><Link to="missoes-e-valores" className="dropdown-item">Missão e Valores</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <a href="#nossas-solucoes" className="nav-link active">Nossas soluções</a>
            </li>
            <li className="nav-item">
                <a href="#contato" className="nav-link active">Contato</a>
            </li>
        </>
    );
}
