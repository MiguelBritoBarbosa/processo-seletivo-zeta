import './style.css';

export const Contato = () => {
    function formValidate() {
        const inputNome: any = document.getElementById("nome");
        const inputEmail: any = document.getElementById("email");
        const inputMensagem: any = document.getElementById("mensagem");

        let msg: string = `
        Nome: ${inputNome.value}
        Email: ${inputEmail.value}
        Mensagem: ${inputMensagem.value}
        Mensagem de ${inputNome.value}enviada com sucesso!`
        alert(msg);
    }
    return (
        <section id="contato" className="container rounded-3 mb-5 pb-3 shadow-lg text-white">
            <h2 className="display-2 text-center">Formulário de Contato</h2>
            <form id="form-container" className="mt-3 bg-dark was-validated" action="/contato/store" method="post">
                <div className="row">
                    <div className="col-6">
                        <div className="col-12 form-floating mb-3">
                            <input type="nome" className="form-control" id="nome" placeholder="Nome" required/>
                            <label htmlFor="nome">Nome</label>
                            <div className="valid-feedback">Válido</div>
                            <div className="invalid-feedback">Este campo não pode estar em branco</div>
                        </div>
                        <div className="col-12 form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="email" required/>
                            <label htmlFor="email">Email</label>
                            <div className="valid-feedback">Válido</div>
                            <div className="invalid-feedback">Escreva um email válido</div>
                        </div>
                        <div className=" col-12 form-floating mb-3">
                            <textarea className="form-control" id="mensagem" rows={5} placeholder="Mensagem" required></textarea>
                            <label htmlFor="mensagem">Mensagem</label>
                            <div className="valid-feedback">Válido</div>
                            <div className="invalid-feedback">Este campo não pode estar em branco</div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" onClick={formValidate}>Enviar</button>
                        </div>
                    </div>
                    <div className="col-6">            {/*// ../../../public/undraw_forms_re_pkrt.svg*/}
                        <img className="img-fluid" src="undraw_forms_re_pkrt.svg" alt="" />
                    </div>
                </div>

            </form>
        </section>
    );
}
