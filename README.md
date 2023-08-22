# MongoDB Playground

Essa é uma projeto que simula um banco de dados MongoDB de uma lanchonete. É possível recuperar e filtrar várias informações a respeito dos produtos.

O foco desse projeto foi explorar a aplicação de queries MQL (MongoDB Query Language) para acesso e manipulação de dados em um banco não relacional (NoSQL).

## O banco de dados

O banco do projeto é populado a partir de um [arquivo BSON](assets/produtos/produtos.bson), que gera uma coleção de documentos.

<details><summary><strong>Exemplo geral do schema de um documento:</strong></summary></br>

```json
{
    "_id": {
      "$oid": "5f280af11532b7276329ba47"
    },
    "nome": "Big Mac",
    "ingredientes": [
      "hamburguer",
      "alface",
      "queijo",
      "molho especial",
      "cebola",
      "picles",
      "pão com gergelim"
    ],
    "tags": [
      "bovino",
      "pão"
    ],
    "valoresNutricionais": [
      {
        "tipo": "calorias",
        "quantidade": 502,
        "unidadeMedida": "kcal",
        "percentual": 25
      },
      {
        "tipo": "carboidratos",
        "quantidade": 45,
        "unidadeMedida": "gramas",
        "percentual": 15
      },
      {
        "tipo": "sódio",
        "quantidade": 1047,
        "unidadeMedida": "miligramas",
        "percentual": 44
      },
      {
        "tipo": "proteínas",
        "quantidade": 27,
        "unidadeMedida": "gramas",
        "percentual": 36
      },
      {
        "tipo": "lipídios",
        "quantidade": 25,
        "unidadeMedida": "gramas",
        "percentual": 45
      }
    ],
    "descricao": "Não existe nada igual\nDois hambúrgures, alface, queijo, molho especial, cebola e picles num pão com gergelim",
    "curtidas": 145,
    "vendidos": 137
  }
```

</details>


## Funcionalidades

A partir dos dados disponíveis, foram estruturadas queries MongoDB para acesso e manipulação de dados, de acordo com os desafios explicitados abaixo:

<details>
<summary><strong>Desafios</strong>
</summary></br>

1. Retorne a quantidade de documentos inseridos na coleção produtos
2. Ordene a coleção produtos pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o nome e a quantidade de lanches vendidos
3. Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
4. Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescente
5. Retorne o nome, as curtidas e vendidos dos lanches que tiveram quantidade de curtidas igual a 36 ou tenham a quantidade de vendas igual a 85
6. Retorne o nome e as curtidas dos lanches que tiveram curtidas maiores que 10 e menores que 100
7. Retorne o nome e vendidos dos lanches que tenham sido vendidos com uma quantidade diferente de 50 e em que o campo tags não exista
8. Delete os lanches com menos de 50 curtidas e retorne o nome dos lanches que restaram no banco
9. Retorne o nome de todos os lanches que possuam calorias abaixo de 500
10. Retorne o nome de todos os lanches que tenham o percentual de proteínas maior ou igual a 30 e menor ou igual a 40
11. Retorne o nome do produto, a quantidade de curtidas e quantos itens foram vendidos dos produtos que não sejam iguais a Big Mac e McChicken
12. Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
13. Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo
14. Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
15. Adicione o campo avaliacao em todos os documentos da coleção e efetue alterações nesse campo
16. Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac
17. Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos
18. Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
19. Remova o item cebola de todos os sanduíches
20. Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo
21. Remova o último ingrediente do sanduíche Cheddar McMelt
22. Adicione a quantidade de vendas dos sanduíches por dia da semana
23. Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)
24. Ordene em todos os documentos os valores do array valoresNutricionais pelo campo percentual de forma decrescente
25. Adicione o valor muito sódio ao final do array tags nos produtos em que o percentual de sódio seja maior ou igual a 40
26. Adicione o valor contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40
27. Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
28. Conte quantos produtos têm 4 ingredientes
29. Renomeie o campo descricao para descricaoSite em todos os documentos
30. Remova o campo curtidas do item Big Mac
31. Retorne o nome dos sanduíches em que o número de curtidas é maior que o número de sanduíches vendidos
32. Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5

</details>

## Tecnologias utilizadas

MongoDB, MongoDB queries, Docker


## Instalação local

Para rodar esta aplicação é necessário ter o Docker instalado em sua máquina.

1. Clone o repositório e entre no diretório
```bash
  git clone git@github.com:lzaghi/mongo-playground.git
  cd mongo-playground
```

2. Instale as dependências 
```bash
  npm install
```
3. Crie um container com um volume apontando para a pasta do projeto
```bash
  docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0
```

4. Acesse o terminal do container
```bash
  docker exec -it nomeDoContainer bash
```

5. Restaure o banco de dados
```bash
  mongorestore -d db -c produtos ./app/assets/produtos/produtos.bson
```

6. Aplique as queries com o comando
```bash
  mongo db < ./app/challenges/desafio[n].mongodb.js
```
(substitua ```[n]``` pelo número do desafio que deseja executar)

As queries podem ser encontradas nos arquivos ```desafio[n].mongodb.js```, na pasta ```chalenges```, e elas também podem ser <strong> executadas diretamente no VSCode com a extensão do MongoDB</strong>.

