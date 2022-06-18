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
