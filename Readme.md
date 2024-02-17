# **Api Node.js para Series - MYSQL**

* Descrição da Api
* Funcionalidade
* Bibliotecas Utilizadas
* Como rodar o projeto

---

## Descrição da Api

Fiz esse projeto quando estava estudando aplicação node.js, com banco de dados MySQL, usei um dos meus lazeres favoritos como inspiração.

## Funcionalidade

É um Crud simples com as funcionalidades basicas, os dados podem ser inseridos, alterados ou deletados por requisição usando um Body Json

* GET - busca todos os filmes cadastrados
* POST - Insere o filme desejado
* DELETE - Deleta o filme selçecionado por ID
* PUT - Autera o filme de acordo com a necessidade e atualização

## Bibliotecas Utilizadas

* Express,
* Sequelize,
* Dotenv

## Como rodar o projeto

1. Clone o projeto;
2. abra sua ide na pasta do projeto
3. crie um um arquivo .env com o database acces do mongodb
4. de npm install
5. rode o projeto com o comando 'npm run dev'

   1. e para ver a magica acontecer faca a requisição no postman ou no insominia com o seguinte body:

      `{    	"titulo": "",    "descricao": "",     	  "image_url": "",   "trailer_ur": "",   "genero": ""   }`

      para put acrescente a coluna 'id' na requisição.
