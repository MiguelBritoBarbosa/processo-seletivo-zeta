import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';
import './style.css';

export const Header = () => {
    return (
        <div className="container-fluid">

            <header className="row" id="header">
                <div id="logo-container" className="text-transition-header">
                    <Link to="/">
                        <div className="d-flex justify-content-center content text-center">
                            <h1 className="display-1 text-shadow">Zeta Tecnologia e Inovação</h1>
                            <h1 className="display-1 ">Zeta Tecnologia e Inovação</h1>
                        </div>
                    </Link>
                </div>
            </header>



        </div>
    );
}
