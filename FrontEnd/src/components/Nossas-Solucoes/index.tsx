import './style.css';

export const Solucoes = () => {
    return (
        <div id="nossas-solucoes" className="container-fluid mt-5 mb-5 d-flex justify-content-center">
            <section className="rounded-3 shadow-lg text-white" id="Nossas-Soluções">
                <h2 className="text-center display-2">Nossas Soluções</h2>
                <div className="row">
                    <div className="col-5">                     {/*// ../../../public/sistemas_inteligentes.jpeg*/}
                        <img  className="m-2 img-thumbnail" src="sistemas_inteligentes.jpeg" alt="Sistemas Inteligentes" />
                                                                {/*// ../../../public/inteligencia-artificial.jpg*/}
                        <img  className="m-2 img-thumbnail" src="inteligencia-artificial.jpg" alt="Sistemas Inteligentes" />
                    </div>
                    <div className="col-2 text-center d-flex align-items-center justify-content-center">
                        <i className="display-1 bi bi-plus-lg"></i>
                    </div>
                    <div className="col-5 d-flex align-items-center">
                                                            {/*// ../../../public/compressor-de-ar-parafuso-techto-platinium.jpg*/}
                        <img className=" img-thumbnail" src="compressor-de-ar-parafuso-techto-platinium.jpg" width="95%" alt="" />
                    </div>
                </div>

                <div className="col m-5" >
                    <p className="Solution-Text fw-bold">
                        Sistema embarcado inteligente e inovador, para gestão de operação e manutenção preventiva e preditiva de compressores de ar
                        que funcionará com integração e serviços em nuvem e inteligência artificial.
                    </p>
                </div>
            </section>
        </div>
    );
}
