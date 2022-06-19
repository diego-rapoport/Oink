# Oink
##### WebApp de gerenciamento de investimentos

## Como rodar

### Backend
#### Rodando: 
  - Entre na pasta e instale os pacotes<br>
    `C:\Caminho da Pasta\Oink\Backend\ > npm i`

  - Rode o servidor<br>
    `C:\Caminho da Pasta\Oink\Backend\ > npm start`
 
<br>
** Obs: Caso você tenha algum erro nessa parte, tente instalar o json-server de forma global

`npm i -g json-server`<br>
** E rode dentro da pasta Backend<br>
``json-server db.json``

#### Rotas em: `http://localhost:3001/usuarios`

- GET    /usuarios
- GET    /usuarios/1
- POST   /usuarios
- PUT    /usuarios/1
- PATCH  /usuarios/1
- DELETE /usuarios/1

#### Nosso objeto
O retorno do backend será nesse formato:
```
{
    "id": int,
    "nome": string,
    "email": string,
    "senha": string,
    "objetivos": [
      {
        "nome": string,
        "dataFinal": data,
        "total": float,
        "media": float,
        "prioridade": int,
        "concluido": boolean,
        "debitos": [
          {
            "valor": float,
            "dataDeposito": data
          }
        ]
      }
    ]
  }
```
