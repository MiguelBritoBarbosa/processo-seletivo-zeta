import { Contato } from '../Contato';
import { Navbar } from '../Navbar';
import { Solucoes } from '../Nossas-Solucoes';
import { Slider } from '../Slider';
import './style.css';

export const Home = () => {
    return (
        <div id="home">
            <Slider />
            <Solucoes />
            <Contato />
        </div>
    );
}
