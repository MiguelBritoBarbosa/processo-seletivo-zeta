// Arquivo principal da aplicação

import app from './app';

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
