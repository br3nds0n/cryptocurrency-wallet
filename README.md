<p align="center">
<img height="290" width="700" src="https://user-images.githubusercontent.com/82064724/148261190-3db20155-f50d-4ff8-9284-d02196a27800.jpeg">
</p>

<img align="right" src="https://img.shields.io/static/v1?label=project&message=Compass&color=FFA429&style=for-the-badge&logo=ghost"/>

# 💰 cryptocurrency wallet

Bem-vindo(a). Este é o desafio da 3° sprint!

Opa dev tudo bem?! Meu nome é Brendson, e mais uma vez venho através desse repositório entregar o 2° desafio do programa de bolsas.
O desafio que foi contruído com o conteúdo aprendido na 3° Sprint. Colocado o conhecimento adquirido 
em prática no desenvolvimento dessa api.

Vamos ao projeto! <code>#dreambigger🚀🧡</code>



<br>

> <b>Status code:</b>  🚧 Em construção... 🚧
 
 ---
 
 ## 🧠 Contexto
No segundo desafio do programa de bolsas, será a criação de uma carteira de cripto moedas. Neste projeto estou incluído relacionamento de tabelas e transações das cripto moedas, onde implemento os fluxos de:

 * Interação de métodos http. (Criar, buscar, editar e remover);
 * Relacionamento de tabelas e transações;
 * validação dos campos;
 * consumir api de moedas;
 
---

## 💻 Baixar e executar o projeto

###  Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postman](https://www.postman.com/downloads/) e o banco de 
dados [MySQL](https://www.mysql.com/downloads/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/br3nds0n/cryptocurrency-wallet.git>

# Acesse a pasta do projeto no terminal
$ cd cryptocurrency-wallet

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# O projeto inciará na porta:3000 - acesse <http://localhost:3000/api/v1/wallet> no postman
```

### 🗄 Conectando com o localHost (database)
Na pasta do projeto, procure pela pasta config.
dentro dessa pasta terá um arquivo `config.json`, nesse arquivo você passará a conexão do banco de dados. Exemplo:
```json 
{
  "development": {
    "username": "root",
    "password": "1234",
    "database": "carteira",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
> ⚠️Obs: Acima é apenas uma demonstração, você passará as informações do seu banco.

### 🗃 Criando o banco (database)

```bash
# Acesse o MySQL
$ mysql -h <host> -u root -p

# Crie o banco
$ create database <nome-do-banco>;

# Confirme o banco
$ show database;

# Saia do terminal MySQL
$ ^C

```

### 📂 Criando as Tabelas (database)

```bash
# Execute os migrates
$ npx sequelize-cli db:migrate

# Popule as tabelas
$ npx sequelixe-cli db:seed:all

```
### ✅ Confirmando as Tabelas (database)
```bash
# Acesse o MySQL
$ mysql -h <host> -u root -p

# Liste os bancos
$ show database;

# Acesse o banco
$ use <nome-do-banco>;

# Liste as tabelas
$ show tables;

# Se seguiu os passos acima corretamente terá esse retorno no terminal:

+--------------------+
| Tables_in_carteira |
+--------------------+
| coins              |
| sequelizemeta      |
| transactions       |
| wallets            |
+--------------------+
```


<br>

---

### 📝 Testes de Moedas(api)
> Chegamos a fase de testes, no postman vamos acessar as moedas da api, `GET` http://localhost:3000/api/v1/json/all.<br><br>Retorno:

```json 
{
    "USD": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": "5.7099",
        "low": "5.6191",
        "varBid": "-0.0474",
        "pctChange": "-0.83",
        "bid": "5.6355",
        "ask": "5.6365",
        "timestamp": "1641591013",
        "create_date": "2022-01-07 18:30:13"
    },
    "USDT": {
        "code": "USD",
        "codein": "BRLT",
        "name": "Dólar Americano/Real Brasileiro Turismo",
        "high": "5.83",
        "low": "5.76",
        "varBid": "-0.06",
        "pctChange": "-1.03",
        "bid": "5.6",
        "ask": "5.94",
        "timestamp": "1641584100",
        "create_date": "2022-01-07 16:35:00"
    },
    "BTC": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": "244.224",
        "low": "236.001",
        "varBid": "4213",
        "pctChange": "1.77",
        "bid": "242.359",
        "ask": "242.359",
        "timestamp": "1641764146",
        "create_date": "2022-01-09 18:35:46"
    },
    "EUR": {
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro/Real Brasileiro",
        "high": "6.4549",
        "low": "6.3831",
        "varBid": "-0.0046",
        "pctChange": "-0.07",
        "bid": "6.3949",
        "ask": "6.3987",
        "timestamp": "1641762907",
        "create_date": "2022-01-09 18:15:07"
    },
    "ETH": {
        "code": "ETH",
        "codein": "BRL",
        "name": "Ethereum/Real Brasileiro",
        "high": "1200.21",
        "low": "1200.21",
        "varBid": "0",
        "pctChange": "0",
        "bid": "1440.25",
        "ask": "16999.75",
        "timestamp": "1610415652",
        "create_date": "2021-01-11 22:40:52"
    }
}

```
<br>
 
### 📝 Teste de rotas (api)

### REQUEST - (GET)
> Rota para pegar todas as carteiras cadastradas.<br> Use: GET - `http://localhost:3000/api/v1/wallet`

<p align="center">
<img width="900" src ="https://user-images.githubusercontent.com/82064724/148702966-736efa90-0f56-47fe-a09a-69b52b47af75.gif">
</p><br>

### REQUEST - (POST)

> Rota para criar uma carteiras.<br> Use: POST - `http://localhost:3000/api/v1/wallet`
> Passe os parametros a serem enviados:
```json
{
     "name": "Brendson Victor",
     "cpf": "123.456.789-13",
     "birthdate": "2003-04-23"
}
```

>Retorno:
<p align="center">
<img width="900" src ="https://user-images.githubusercontent.com/82064724/148703624-3d4f5ee1-b592-4280-97da-db8f5db91fc5.gif">
</p><br>


### REQUEST - (PUT)

> Rota para atualizar uma carteiras.<br> Use: PUT - `http://localhost:3000/api/v1/wallet/:address`
> No exemplo de rota a cima foi gerado um address 8, irei atualizar o capo name:
```json
{
     "name": "Gabriel Victor",
}
```

>Retorno:
<p align="center">
<img width="900" src ="https://user-images.githubusercontent.com/82064724/148703855-878fab27-c1e1-4d22-9537-9f014bbb74f3.gif">
</p><br>

### REQUEST - (DELETE)

> Rota para atualizar uma carteiras.<br> Use: DELETE - `http://localhost:3000/api/v1/wallet/:address`<br> Nesse exemplo irei apagar o address 8:
> Retorno:
<p align="center">
<img width="900" src ="https://user-images.githubusercontent.com/82064724/148704645-11046512-64f7-45d7-9f59-ebc15676e130.gif">
</p><br>

### REQUEST - (GET) 
> Retornar histórico de movimentação de uma carteira `http://localhost:3000/api/v1/wallet/:address/transaction`<br>
> Retorno:
<p align="center">
<img width="900" src ="https://user-images.githubusercontent.com/82064724/148706709-dbbe8622-7abb-4700-91d6-430a3e1f50b8.gif">
</p><br>


## 🛠 Tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e testagem do projeto. Clicando no icone da tecnologia, você será redirecionado para o site oficial para instalação: <br>



| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://nodejs.org/pt-br/download/" target="_blank"><img align="center" alt="nodeJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a>                   | NodeJs                     |  `16.13.1`      |
| <a href="https://www.mysql.com/downloads/" target="_blank"><img align="center" alt="mysql" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg"></a>            | MySQL                      |  `8.0.0`       | 
| <a href="https://www.postman.com/downloads/" target="_blank"><img align="center" alt="postman" height="30" width="30" src="https://user-images.githubusercontent.com/82064724/147416090-89b4e7a3-2b78-417a-a154-f47940d23e38.png">            | Postman                    |  `9.6.2`       | 
| <a href="https://code.visualstudio.com/download" target="_blank"><img align="center" alt="VsCode" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg"></a> | VsCode | `1.63.2` |


---
## **:star2: Agradecimentos**

<div align=left style="width:100%">
<table>
  <tr align=center>
    <th>CompassUol</th>
    <th>Felipe da Silva</th>
    <th>Thais Nicodemus</th>
   <th>Diego Bueno bigboss friend</th>
    <th>Bruna Santos</th>
    <th>Gabriel Missio</th>
    <th>Giovanni Hoffmann</th>
  </tr>
  <td>
      <a href="*">
        <img width="100" height="100" src="https://user-images.githubusercontent.com/82064724/147250813-a8ffeeaa-d1e0-464d-b157-5b1832419962.jpg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="200" height="120" src="https://user-images.githubusercontent.com/82064724/147247938-ad746eb0-6acb-493d-a5a1-f18ced1f79ea.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="120" height="120" src="https://user-images.githubusercontent.com/82064724/147248193-cb95b8e0-9b86-4788-9c99-1f7d81a67c5c.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="140" height="120" src="https://user-images.githubusercontent.com/82064724/147248671-1433631f-d30e-43ef-8a90-11f1eb0dad6e.jpeg">
      </a>
    </td>
    <td>
      <a href="*">
        <img width="200" height="120" src="https://user-images.githubusercontent.com/82064724/147249013-2461e045-8883-45b3-8aaa-54f25b0039a2.jpeg">
      </a>
    </td>
      <td>
      <a href="*">
        <img width="200" height="120" src="https://user-images.githubusercontent.com/82064724/148302349-1139200d-fda8-4c27-900a-3f6a71a7da1c.jpeg">
      </a>
    </td>
 <td>
      <a href="*">
        <img width="140" height="120" src="https://user-images.githubusercontent.com/82064724/147251080-3157eb74-fce3-4467-982b-8f04a33a62df.jpeg">
      </a>
    </td>
  </tr>
</table>

</div>

<br>

## ✏ Autor

Obrigado a todos a cima que me ajudaram a entender o projeto, agradeço pela oportunidade. Garanto que essa api foi desenvolvida com todo meu máximo, me dediquei 100% ao projeto que infelizmente não foi concluido a tempo. Quero agradecer especiamente a Gabriel e Bruna por toda a atenção dada a mim no projeto.<br><br>Obrigado mais uma vez e vamos para o próxima!!<code>#dreambigger🚀🧡</code> <br>


<div align=left>
 
- <table>
 <p> Desenvolvido por:</p>
  <tr align=center>
    <th><strong> Brendson Victor 👨‍🚀</strong></th>
  </tr>
   <td>
      <a href="https://github.com/br3nds0n">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/147268606-4fd3c629-8cb1-422b-a025-cf20b44930c7.jpeg" > <p align="left">
   <a href="https://instagram.com/breendson/" alt="Instagram">
  <img src="https://img.shields.io/badge/-Instagram-DF0174?style=flat-square&labelColor=DF0174&logo=instagram&logoColor=white&link=[instagram]"/></a>
   <a href="https://www.linkedin.com/in/brendson/" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=flat-square&logo=Linkedin&logoColor=white&link=[linkedin]" /></a>                                     
</p>
      </a>
    </td>
  </tr>
</table>
</div>

---

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.
