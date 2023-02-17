//Classe do controlador das rotas Home

class HomeController {
    index(req: any, res: any): void {
        res.json({
            tudoCerto: true,
        });
    }
}

export default new HomeController();
