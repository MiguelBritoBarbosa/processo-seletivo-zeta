import './style.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-expanded="false"
                aria-label="Toggle Navigation"> <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse text-transition-navbar" id="navbarNav">
                    <ul className="navbar-nav">
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
                        <li className="nav-item">
                            <a href="/tests-api" className="nav-link active">API Tests</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}




