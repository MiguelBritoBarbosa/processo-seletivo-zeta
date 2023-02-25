import './style.css';

export const Slider = () => {
    return (
        <div id="carousel-container" className="text-transition-slider container-fluid mt-5 d-flex justify-content-center">
            <div className="col-10">
                <div id="carousel" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className="active" type="button" data-bs-target="#carousel"
                        data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button className="" type="button" data-bs-target="#carousel"
                        data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>
                        <button className="" type="button" data-bs-target="#carousel"
                        data-bs-slide-to="2" aria-current="true" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active">
                            <img className="d-blok w-100" src="../../../public/Storm-300-1.jpg" alt="Compressor1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-5">Compressor 1</h5>
                                <p>Imagem Exemplo</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                        <img className="d-blok w-100" src="../../../public/Storm-300-1.jpg" alt="Compressor2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-5">Compressor 2</h5>
                                <p>Imagem Exemplo</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                        <img className="d-blok w-100" src="../../../public/Storm-300-1.jpg" alt="Compressor3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-5">Compressor 3</h5>
                                <p>Imagem Exemplo</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );
}
