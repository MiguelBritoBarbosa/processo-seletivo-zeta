import './style.css';
import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <footer id="footer" className="bg-dark text-white">
            <div className="container-fluid" id="footer-links-container">
                <div className="row">
                    <div className="col-12 col-md-4 footer-column mb-5 mb-sm-3 mb-md-2">
                        <h3>Páginas</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="secondary-color"><i className="bi bi-house-fill"></i> Home</Link>
                            </li>
                            <li className="mb-2">
                                <a href="https://github.com/MiguelBritoBarbosa" className="secondary-color"><i className="bi bi-github"> </i>Github</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.linkedin.com/in/miguelbritobarbosa/" className="secondary-color"><i className="bi bi-linkedin"></i> Linkedin</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.instagram.com/itz_.preto/" className="secondary-color"><i className="bi bi-instagram"></i> Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footer-column mb-5 mb-sm-3 mb-md-2" id="footer-center">
                        <h3><i className="bi bi-buildings"></i> Zeta Tecnologias</h3>
                        <p className="secondary-color">Nossos contatos</p>
                        <p className="footer-texts"><i className="bi bi-telephone"></i> (xx) xxxxx-xxxx</p>
                        <p className="footer-texts"><i className="bi bi-envelope-at"></i> compressorinteligente@gmail.com</p>
                    </div>
                    <div className="col-12 col-md-4 footer-column mb-5 mb-sm-3 mb-md-2">
                        <h3>Informações</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="secondary-color"><i className="bi bi-journal-bookmark-fill"></i> Politicas de Privacidade</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="secondary-color"><i className="bi bi-person-workspace"></i> Trabalhe conosco</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="secondary-color"><i className="bi bi-bank2"></i> Orçamentos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="newsletter-container">
                <div className="col-12">
                    <div className="row d-flex justify-content-center">
                        <h3 className="secondary-color">Assine nossa Newsletter <i className="bi bi-newspaper"></i>:</h3>
                        <form action="" className="d-flex" id="news-form">
                            <i className="bi bi-envelope primary-color"></i>
                            <input type="email" className="form-control me-2" name="email" id="news-email" placeholder="Digite seu email"/>
                            <button className="btn btn-light" type="button">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container text-center" id="copy-container">
                <p>Todos os direitos reservados <i className="bi bi-c-circle"></i> 2023
                <span className="color-blue"> Zeta Tecnologia e Inovação</span> - Compressores inteligentes</p>
            </div>
        </footer>
    );
}
