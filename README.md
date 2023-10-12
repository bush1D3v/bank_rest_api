# ⛰️ BANK RESTFUL API
![Npm version](https://img.shields.io/static/v1?label=npm&message=v10.1.0&color=blue) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=green)

## 🛠️ Tecnologias e Ferramentas Utilizadas
<div>
    <img align='center' height='50' width='70' title='JavaScript' alt='javascript' src='https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg' />
    <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg' />
    <img align='center' height='55' width='70' title='PostgreSQL' alt='postgresql' src='https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg' />
    <img align='center' height='49' width='49' title='Express' alt='express' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/ba645c20-1f19-4914-8ad0-de6c7f83ba2e' /> &nbsp;
    <img align='center' height='53' width='49' title='Nodemon' alt='nodemon' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/fd586348-7781-4e02-a4f0-fe7410ef43fb' /> &nbsp;
    <img align='center' height='49' width='49' title='Dotenv' alt='dotenv' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/432ec521-c94a-4f24-964e-f62658d04581' /> &nbsp;
    <img align='center' height='53' width='55' title='JsonWebToken' alt='jsonwebtoken' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/d23ffb9d-aedc-4d68-9209-7268d7f41ce6' /> &nbsp;
    <img align='center' height='48' width='48' title='Bcrypt' alt='bcrypt' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/5863bac1-a591-4776-82a4-f427681934be' /> &nbsp;
    <img align='center' height='48' width='48' title='Insomnia' alt='insomnia' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/75a3fffd-792e-4250-8ef5-2abb615e38a0' /> &nbsp;
    <img align='center' height='53' width='49' title='Beekeeper' alt='beekeeper' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/0d5b4b55-546c-4bc0-a25c-dfc9116fe993' /> 
</div> <br>

## 📄 Sobre o Projeto
<strong>RESTFUL API</strong> de um banco com integração a <strong>banco de dados</strong>, <strong>autenticação</strong> de usuário e <strong>criptografia</strong> de senha. <br> Projeto realizado levando em consideração o princípio de responsabilidade única, <strong>SOLID</strong>. 

# 💻 Como executar esse projeto?

Para executar esse projeto localmente, você vai precisar:

- Clonar Esse Repositório

```zsh
git clone https://github.com/bush1D3v/desafio-backend-modulo-03-sistema-dindin-b2b-ifood-t07
```

- Instalar dependências

```zsh
npm install
```

- Executar projeto com

```zsh
npm run dev
```

# ⚠️ Não se Esqueça

Para que o projeto funcione corretamente, você precisa configurar o arquivo `.env.example`, para que ele aponte para as informações do banco de dados PostgreSQL instalado em sua máquina. Siga os passos abaixo para fazer essa configuração:

1. **Configure o arquivo `.env.example`:** Para que seja possível a conexão com o seu banco de dados, forneça as informações necessárias para criar a conexão através do dotenv.

   ```javascript
   DB_HOST=your_host
   DB_PORT=your_port
   DB_USER=your_user
   DB_PASS=your_password
   DB_DATA=your_database
      
   JWT_PASS=your_key
   ```

2. **Execute o Dump SQL:** Após configurar o arquivo `.env.example`, certifique-se de ter executado o script SQL fornecido (`dump.sql`) no seu banco de dados PostgreSQL. Isso criará as tabelas necessárias.

   ```sql
   create table usuarios (
   id serial primary key,
   nome text not null,
   email text not null unique,
   senha text not null
   ); ...
   ```
 
Certifique-se de fornecer as informações corretas de acordo com o seu ambiente local. Após essas configurações, o projeto estará pronto para se conectar ao seu banco de dados PostgreSQL local, e sua execução se tornará possível.

**Lembre-se de que as informações do banco de dados são sensíveis, portanto, mantenha-as seguras e não compartilhe com terceiros.**

# 🗺️ Rotas

**A seguir, temos uma lista contendo todas as rotas desta API:**

## Cadastrar Usuário

- **POST** `/usuario`

  **Cria um novo usuário no sistema.**

  Exemplo de requisição:

  ```json
  {
      "nome": "José",
      "email": "jose@email.com",
      "senha": "123456"
  }
  ```

  Exemplo de resposta:

  ```json
  {
      "id": 1,
      "nome": "José",
      "email": "jose@email.com"
  }
  ```
  
## Fazer Login

- **POST** `/login`

  **Permite que um usuário cadastrado faça login no sistema.**
  
  Exemplo de requisição:

  ```json    
  {
        "email": "jose@email.com",
        "senha": "123456"
  }
  ```

  Exemplo de resposta:

  ```json
  {
      "usuario": {
          "id": 1,
          "nome": "José",
          "email": "jose@email.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIzMjQ5NjIxLCJleHAiOjE2MjMyNzg0MjF9.KLR9t7m_JQJfpuRv9_8H2-XJ92TSjKhGPxJXVfX6wBI"
  }
  ```
  
## Detalhar Perfil do Usuário Logado

- **GET** `/usuario`

  **Obtém os dados do perfil do usuário logado.**

  🚨 SEM CORPO DE REQUISIÇÃO

  Exemplo de Resposta:

  ```json
  {
      "id": 1,
      "nome": "José",
      "email": "jose@email.com"
  }
  ```

## Editar Perfil do Usuário Logado

- **PUT** `/usuario`

  **Permite que o usuário logado edite seu próprio perfil.**
  
  Exemplo de requisição:
  
    ```json
  {
        "nome": "José de Abreu",
        "email": "jose_abreu@email.com",
        "senha": "j4321"
  }
    ```

  🚨 SEM RESPOSTA DE REQUISIÇÃO

## Listar Categorias

- **GET** `/categoria`

  **Lista todas as categorias cadastradas no sistema.**

  🚨 SEM CORPO DE REQUISIÇÃO

  Exemplo de Resposta:

    ```json
  [
      {
          "id": 1,
          "descricao": "Roupas"
      },
      {
          "id": 2,
          "descricao": "Mercado"
      }
  ]
    ```

## Listar Transações do Usuário Logado

- **GET** `/transacao`

  **Lista todas as transações associadas ao usuário logado.**

  🚨 SEM CORPO DE REQUISIÇÃO

  Exemplo de Resposta:

    ```json
  [
      {
          "id": 1,
          "tipo": "saida",
          "descricao": "Sapato amarelo",
          "valor": 15800,
          "data": "2022-03-23T15:35:00.000Z",
          "usuario_id": 5,
          "categoria_id": 4,
          "categoria_nome": "Roupas",
      },
      {
          "id": 3,
          "tipo": "entrada",
          "descricao": "Salário",
          "valor": 300000,
          "data": "2022-03-24T15:30:00.000Z",
          "usuario_id": 5,
          "categoria_id": 6,
          "categoria_nome": "Salários",
      }
  ]
    ```

## Detalhar Transação do Usuário Logado

- **GET** `/transacao/:id`

  **Obtém detalhes de uma transação específica associada ao usuário logado.**

  🚨 SEM CORPO DE REQUISIÇÃO

  Exemplo de Resposta:

    ```json
    {
        "id": 3,
        "tipo": "entrada",
        "descricao": "Salário",
        "valor": 300000,
        "data": "2022-03-24T15:30:00.000Z",
        "usuario_id": 5,
        "categoria_id": 6,
        "categoria_nome": "Salários",
    }
    ```

## Cadastrar Transação do Usuário Logado

- **POST** `/transacao`

  **Permite que o usuário logado cadastre uma nova transação.**
  
  Exemplo de requisição:
  
    ```json
  {
        "tipo": "entrada",
        "descricao": "Salário",
        "valor": 300000,
        "data": "2022-03-24T15:30:00.000Z",
        "categoria_id": 6
  }
  ```

  Exemplo de Resposta:

  ```json
  {
      "id": 3,
      "tipo": "entrada",
      "descricao": "Salário",
      "valor": 300000,
      "data": "2022-03-24T15:30:00.000Z",
      "usuario_id": 5,
      "categoria_id": 6,
      "categoria_nome": "Salários",
  }
  ```

## Atualizar Transação do Usuário Logado

- **PUT** `/transacao/:id`

  **Permite que o usuário logado atualize uma transação específica.**
  
  Exemplo de requisição:
  
    ```json
  {
        "descricao": "Sapato amarelo",
        "valor": 15800,
        "data": "2022-03-23 12:35:00",
        "categoria_id": 4,
        "tipo": "saida"
  }
    ```

  🚨 SEM RESPOSTA DE REQUISIÇÃO

## Excluir Transação do Usuário Logado

- **DELETE** `/transacao/:id`

  **Permite que o usuário logado exclua uma transação específica.**

  🚨 SEM CORPO DE REQUISIÇÃO

  🚨 SEM RESPOSTA DE REQUISIÇÃO

## Obter Extrato de Transações do Usuário Logado

- **GET** `/transacao/extrato`

  **Obtém um resumo das transações do usuário, incluindo o total de entradas e saídas.**
  
  🚨 SEM CORPO DE REQUISIÇÃO

  Exemplo de resposta:

  ```json
  {
      "entrada": 300000,
      "saida": 15800
  }
  ```
  
