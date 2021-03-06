# enjoei-api

enjoei-api é uma api desenvolvida com base nas tecnologias NodeJs, Typescript e com banco orientado a documentos MongoDb e com base nos princios de TDD (ulizando jest para unit tests e supertest para integration), Clean Architecture, SOLID e seus design patterns. Criada para cumprir o desafio da Enjoei.

# Features!
  - SignUp API: Criação de usuario com senha cryptografada utilizando Bcrypt e o padrão JwT
  - Login e geração de token de accessToken cryptogradado
  - Middleware de autenticação das rotas
  
# endpoints:
  - POST /login: recebe através do body um email e password para autenticação, se correto retorna accessToken // não precisa autenticar é publica
  - POST /signup: recebe dados de criação do usuario no body(name, password, passwordConfirmatio e email) cria um usuario na base // não precisa autenticar é publica
  -
### Tech

enjoei-api usa:

* [NodeJs]
* [JwT]
* [Bcrypt]
* [Jest]
* [supertes]
* [Express]
* [Eslint]
* [MongoDb]

Codigo publicado no GitHub

### Installation

enjoei-api presisa [Node.js](https://nodejs.org/) v10+ para rodar.
npm para o gerenciamento e download das dependências
MongoDb

Com essas dependêcias instaladas, basta clonar o repositório do git, navegar até a pasta raiz da aplicação e rodar os seguintes comandos:

```sh
$ npm install
$ npm run dev //rodar em modo de desenvolvedor
$ npm run build //gerar a pasta dis para rodar em produção
$ npm run start //rodar a api apartir dos arquivos de build /dist
```

Tests:

```sh
$ npm run test:unit // roda apenas testes unitarios
$ npm run test:integration // roda apenas os test de integração
$ npm run test // roda todos os testes tanto integration quanto unit
$ npm run test:ci // roda todos os tentes monstrando a cobertura total
```
OBS: Todos os comando função com o yarn

A api está hospedada no heroku versão free dyno, por isso quando não utilizada o heroku a desliga até a próxima requisição, por isso pode demorar um pouco para a primeira resposta.

Link da api: https://enjoei-api.herokuapp.com/api
