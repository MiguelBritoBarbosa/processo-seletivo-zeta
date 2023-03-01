import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuemSomos } from './components/Quem Somos';
import { MissoesEvalores } from './components/Missoes e Valores';
import { NotFound } from './components/NotFound';
import { TestsAPI } from './components/TestsAPI';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quem-somos"  element={<QuemSomos />} />
            <Route path="/missoes-e-valores"  element={<MissoesEvalores />} />
            <Route path="*"  element={<NotFound />} />
            <Route path="tests-api"  element={<TestsAPI />} />

        </Routes>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
