import { SyntheticEvent } from 'react';
import './style.css';
import postUsers from './postUsers';
import deleteUsers from './deleteUsers';
import postToken from './postToken';
import apiFetch from './apiFetch';
import putUsers from './putUsers';
export const TestsAPI = () => {

    function getUri(e: SyntheticEvent<HTMLButtonElement, Event>) {
        const button = e.target as HTMLButtonElement;
        const uri = button.id;
        apiFetch(uri);
    }





    return (
        <div className="text-transition container-fluid d-flex justify-content-center mt-5 mb-5 text-white" id="quem-somos">
            <section className="rounded-3 shadow-lg" id="Nossas-Soluções">
                <h2 className="text-center display-2">Testes para API</h2>

                <div className="row m-5">
                    <div className="d-flex justify-content-center col-12 col-md-2 mb-sm-2 mb-2">
                        <div className="btn-group btn-group-sm">
                            <button onClick={getUri} id="/" type="button" className="btn btn-dark">GET home</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-12 col-md-8 mb-2">
                        <div className="btn-group btn-group-sm">
                            <button onClick={getUri} id="/users" type="button" className="btn btn-dark">GET users</button>
                            <button onClick={postUsers} type="button" className="btn btn-dark">POST users</button>
                            <button onClick={putUsers} type="button" className="btn btn-dark">PUT users</button>
                            <button onClick={deleteUsers} type="button" className="btn btn-dark">DELETE users</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-12 col-md-2 mb-2">
                        <div className="btn-group btn-group-sm">
                            <button onClick={postToken} type="button" className="btn btn-dark">GET token</button>
                        </div>
                    </div>
                </div>
                <div id="informações">

                </div>
                <div id="json" className="container p-4 bg-dark rounded-3 mb-4">

                </div>




            </section>
        </div>
    );
}
