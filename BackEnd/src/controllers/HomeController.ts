//Classe do controlador das rotas Home

class HomeController {
    index(req: any, res: any): void {
        res.json({
            Home: 'online',
        });
    }
}

export default new HomeController();
