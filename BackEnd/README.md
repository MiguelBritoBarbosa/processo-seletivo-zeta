# API Rest construída com TypeScript
### Passos para construção da API

1.  Criar o arquivo .gitignore e o .editorconfig
    *   ![Passo1](https://user-images.githubusercontent.com/107328582/220712405-53fcd41c-0fed-45cc-a4e2-4db3b0ffe67f.png)
    *   ![Passo1_2](https://user-images.githubusercontent.com/107328582/220712455-c4db03b9-c93d-4a21-be7f-7c0d580daccc.png)


2.  Iniciar o projeto com `npm init -y`
    ![Passo2](https://user-images.githubusercontent.com/107328582/220712589-2559b6b0-78f2-40da-b02c-111f83cefc28.png)


3.  Instalar o Typescript localmente com `npm i typescript -D`
    ![Passo3](https://user-images.githubusercontent.com/107328582/220712614-0c0601bc-50ac-4a66-b911-b7087297a13d.png)


4.  Criar e configurar a pasta .vscode e o arquivo settings.json
    ![Passo4](https://user-images.githubusercontent.com/107328582/220712648-901158d8-5bae-442b-8a7b-e5fc7caf0159.png)


5.  Instalar o ts-node com `npm i ts-node -D`
    ![Passo5](https://user-images.githubusercontent.com/107328582/220712688-7bb7004e-5848-4db8-b72e-1c0e125b1ea8.png)


6.  Instalar e configurar o eslint com `npm i eslint -D` e `npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`
    *   ![Passo6](https://user-images.githubusercontent.com/107328582/220712734-0303783b-4f51-4570-8288-1fb3eb6d162c.png)
    *   ![Passo6_2](https://user-images.githubusercontent.com/107328582/220712778-366e337c-bca2-460e-ac0b-ab9d06ffdf31.png)

7.  Instalar e configurar o prettier com `npm i prettier eslint-config-prettier eslint-plugin-prettier -D`
    *   ![Passo7](https://user-images.githubusercontent.com/107328582/220712822-0f8ce268-9599-405c-902d-428bbbf705c5.png)
    *   ![Passo7_2](https://user-images.githubusercontent.com/107328582/220712859-7248c71f-c876-439c-aee7-e9b41c67abac.png)

8.  Criar e configurar o arquivo tsconfig.json com `npx tsc --init`
    *   ![Passo8](https://user-images.githubusercontent.com/107328582/220712901-3cb6b5f2-8d79-4d86-9025-9d75349a82b0.png)
    *   Fazer as configurações do arquivo:
        -   "target": "es2016", 
        -   "lib": ["ESNext", "DOM"], 
        -   "module": "commonjs",
        -   "outDir": "./dist",
        -   "esModuleInterop": true, 
        -   "forceConsistentCasingInFileNames": true,
        -   "strict": true,   
        -   "skipLibCheck": true  
        -   Então fora de `"compilerOptions"` adicione , "include": [ "./server.ts" ]
    *   Provavelmente quando o arquivo for salvo irá apresentar um erro, para consertar crie o arquivo `server.ts`
        ![Passo8_2](https://user-images.githubusercontent.com/107328582/220712940-bc23dab1-0f7a-4756-aa8b-d1d783134fa9.png)

9.  instalar e configurar nodemon e sucrase com `npm i nodemon sucrase`
    *   adicionar: `"dev": "nodemon ./server.ts"` nos *"scripts"* do arquivo package.json.
        ![Passo9](https://user-images.githubusercontent.com/107328582/220712975-94158f2b-41d9-451e-af35-f1f0d7385ccd.png)
    *   Criar nodemon.json e configura-lo
        ![Passo9_2](https://user-images.githubusercontent.com/107328582/220713017-97403c53-b5aa-4329-b298-a5c415d76a64.png)

10. Criar a estrutura de pastas do projeto 
    *   ![Passo10](https://user-images.githubusercontent.com/107328582/220713051-d9c32d36-7e5c-4f14-81f5-d252efb3e30f.png)

    
11. Instalar express com `npm i express` e `npm i --save-dev @types/express`
    ![Passo11](https://user-images.githubusercontent.com/107328582/220713186-6baefeb3-2b58-4f63-9727-8bb0c03b1c14.png)

12. Criar e configurar o arquivo .env com `npm i dotenv`
    ![Passo12](https://user-images.githubusercontent.com/107328582/220713219-27f0984e-68cb-4373-b729-96c970115c7d.png)

13. Instalar o Sequelize e o PostgreSql `npm i sequelize pg` e `npm i sequelize-cli -D`
    *   ![Passo13](https://user-images.githubusercontent.com/107328582/220713246-3fcb154c-c5e2-46e9-89c5-c1c422c9cc71.png)

14. Criar e configurar o arquivo config.js na pasta database
    ![Passo14](https://user-images.githubusercontent.com/107328582/220713300-17a89af6-adaa-40bb-9837-1bb6bba8d33f.png)


15. Crirar e configurar o arquivo .sequelizerc.js
    ![Passo15](https://user-images.githubusercontent.com/107328582/220764391-1adeb3b8-418d-41f1-9320-e3cfe8f0b3bf.png)



16. criar e configurar uma migration para criação de uma nova tabela no Banco com `npx sequelize migration:create --name=usuarios`
    *   ![Passo16](https://user-images.githubusercontent.com/107328582/220681727-34839d6a-e0d6-43c3-8f3d-eb2f0223126f.png)
    *   ![Passo16_2](https://user-images.githubusercontent.com/107328582/220682919-b7a3ae43-7859-4f7d-8ce8-633264d28c35.png)



17. Executar a migração com `npx sequelize db:migrate`
OBS: caso a migração esteja errada, para desfazela é necessário usar o comando: npx sequelize db:migrate:undo
    *   ![Passo17](https://user-images.githubusercontent.com/107328582/220687184-6154d482-4af1-49fa-8efd-11e53a118f35.png)
    *   ![Passo17_2](https://user-images.githubusercontent.com/107328582/220765302-1a0705d5-a92e-4fc9-b651-737b22cb415c.png)



18. instalar o bcryptjs para encripitar senhas com `npm i bcryptjs` e `npm i --save-dev @types/bcryptjs`
    ![Passo18](https://user-images.githubusercontent.com/107328582/220765880-14d4c855-a3cc-4326-8634-08d3e86434dd.png)


19. Criar todas as rotas CRUD da API
    1.  Primeiro criar o arquivo app.ts da aplicação e criar uma rota exemplo
        * Na pasta routes crie o arquivo home.ts
            * Na pasta controllers crie o arquivo HomeController.ts
            * ![Passo19](https://user-images.githubusercontent.com/107328582/220767023-c839250b-f2e4-4c68-bd16-544891f6c176.png)
        * ![Passo19_2](https://user-images.githubusercontent.com/107328582/220767249-f55ba2e0-b746-40ee-b98c-1d506c033263.png)
        ![Passo19_3](https://user-images.githubusercontent.com/107328582/220767441-d25898a3-c678-43b0-9d55-d1df0640240f.png)
    2.  Depois, criar as rotas do usuário
        *   Criar um controller para o usuario
            *   Criar o model do usuraio
                1.  Dentro da pasta database crie o arquivo connection.ts
                    *   ![Passo19_5](https://user-images.githubusercontent.com/107328582/220770909-af206995-c62c-4959-9ba7-5cebc87d763a.png)
                3.  Dentro da pasta config crie o arquivo database.ts
                    *   ![Passo19_4](https://user-images.githubusercontent.com/107328582/220770754-50933ece-466a-47ca-ab99-b0c63330a382.png)   
            *   ![Passo19_6](https://user-images.githubusercontent.com/107328582/220771303-d9719450-f70b-4f8a-ac08-d413f25d0e49.png)
        *   ![Passo19_7](https://user-images.githubusercontent.com/107328582/220772083-e617ff61-7cd0-49d8-b2eb-fd374a8760bb.png)
        *   ![Passo19_7_2](https://user-images.githubusercontent.com/107328582/220772092-1e9e4c9e-5932-4ba9-bc18-5116e83579f2.png)
        ![Passo19_8](https://user-images.githubusercontent.com/107328582/220772386-1c9c297e-e8b8-4421-b852-d27013111319.png)
        *   Configurar o server.ts
        ![Passo19_9](https://user-images.githubusercontent.com/107328582/220778029-0e1f68e3-f4a8-40ce-b2c7-d5899124a169.png)


20. Instalar o JWT na aplicação com `npm i jsonwebtoken` e `npm i --save-dev @types/jsonwebtoken`
    *   ![Passo20](https://user-images.githubusercontent.com/107328582/220773079-1ed54815-25f0-4e7f-beea-a3e229dd0452.png)

21. Criar o middleware de autenticação
    *   Criar na pasta config o arquivo authenticator
    *   ![Passo21](https://user-images.githubusercontent.com/107328582/220773558-e0986ff0-217b-4fb4-a366-b7542da21854.png)
    ![Passo21_2](https://user-images.githubusercontent.com/107328582/220773585-8cecc1b4-d77f-451a-9c2e-abc63bf21b62.png)

22. Criar a rota de autenticação
    *   Criar o controller para o Token
    *   ![Passo22](https://user-images.githubusercontent.com/107328582/220774137-9267983b-fbe1-4c35-b010-c5536cdf1f3f.png)
    ![Passo22_2](https://user-images.githubusercontent.com/107328582/220774226-c80d3763-e9bd-4044-8b43-9b7e7a666413.png)
   
23. Adicionar o middleware nas rotas sensíveis
    *   ![Passo23](https://user-images.githubusercontent.com/107328582/220774437-86514185-0925-46ba-901c-44b5969902a9.png)

24. Adicionar todas as rotas no app.ts
    *   ![Passo24](https://user-images.githubusercontent.com/107328582/220779130-11c7f10b-04d4-4b1a-9c99-3bcec77b5e90.png)


25. Criar e configurar uma seed para criar usuarios na base de dados com `npx sequelize seed:generate --name criar-usuarios`
    *   ![Passo25](https://user-images.githubusercontent.com/107328582/220775716-980723bc-4079-4a47-a371-64719506e072.png)
    *   ![Passo25_2](https://user-images.githubusercontent.com/107328582/220776610-a7eda5bc-1763-419a-b8f7-4f29ebe669d2.png)

26. Executar a seed com `npx sequelize db:seed:all`
    *   ![Passo26](https://user-images.githubusercontent.com/107328582/220777149-e486a533-ea7e-4572-86ed-ee8f166ca0d7.png)
    *   ![Passo26_2](https://user-images.githubusercontent.com/107328582/220777161-45956f04-9133-48b8-9c5c-fde6349c4cdb.png)




### Teste
    Em andamento...


### Referências Bibliográficas
>   https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/
>    
>   https://brunolorencolopes.gitlab.io/blog/pt-br/docker/RODANDO_O_POSTGRES_EM_DOCKER.html
>
>   https://www.youtube.com/watch?v=l5VXbLNYu2U | Primeiros Passos no PostgreSQL - Hashtag Programação
>
>   https://www.youtube.com/watch?v=A523278CPxo | [COMPARATIVO] AWS vs Azure vs GCP - Qual nuvem utilizar? - Pena Rocks
>
>   https://www.youtube.com/watch?v=l2z62l3w8ec | Integrando Typescript com Postgres Sequelize - Pedro Oliveira
>
>   https://medium.com/@williamphilippe/como-usar-o-sequelize-com-postgresql-em-typescript-6cec17a101f8
>
>   https://douglinhas-ops.medium.com/incluir-jwt-nas-suas-aplicações-nodejs-com-typescript-442ca718b60f


