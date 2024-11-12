### Configuração do Ambiente e Integração da API MeEventos

Este guia explica como configurar e integrar a API MeEventos no seu projeto Node.js. Siga os passos abaixo para configurar o `package.json`, instalar a biblioteca da API, e inicializar a instância com as credenciais de acesso.

**Passo 1: Configurar o** `package.json`

Para configurar o seu ambiente de Node.js, inicialize o arquivo `package.json`. Isso definirá as dependências e scripts do seu projeto.


```bash
npm init
```

Siga as instruções para fornecer os detalhes do seu projeto.

**Passo 2: Instalar a API MeEventos**

Instale a biblioteca oficial da API MeEventos utilizando o comando:

```bash
npm install @meeventos/api
```

Essa biblioteca oferece acesso às rotas e métodos disponíveis para interação com o sistema MeEventos.

**Passo 3: Importação e Configuração da API**

Na sua aplicação principal (normalmente no arquivo `main.js` ou `index.js`), importe o pacote da API MeEventos usando o `require`.

```js
const MeEventos = require('@meeventos/api');
```

**Passo 4: Definir as Configurações da API**

Para autenticação, você precisa definir as configurações de `baseURL` e `apiKey`. Estes valores devem ser específicos para o seu ambiente e fornecidos pela MeEventos.

- `baseURL`: URL base do sistema MeEventos onde a API está hospedada.
- `apiKey`: Chave de API exclusiva para autenticação.

Exemplo de configuração:

```js
const baseURL = "url do seu sistema";
const apiKey = "sua chave api";
```

**Passo 5: Instanciar a API**

Agora, instancie a API passando baseURL e apiKey para configurar a comunicação com o servidor:

```js
const Api = new MeEventos(baseURL, apiKey);
```

A partir deste ponto, você pode acessar as rotas e métodos da API MeEventos utilizando a instância `Api`.

**Passo 6: Chamando Métodos da API**

Para realizar chamadas à API, acesse a rota desejada e o método correspondente. Abaixo está um exemplo de como chamar o método `seller()` da rota `userInteraction`, que traz informações de vendedores.

```js
Api.userInteraction.seller()
  .then((data) => {
    console.log(data); // Processa os dados retornados
  })
  .catch((error) => {
    console.error(`Erro ao obter vendedores: ${error.message}`); // Tratamento de erro
  });
```

- `Api`: A instância da API criada com `new MeEventos(baseURL, apiKey)`.
- `userInteraction`: Rota da API MeEventos que agrupa métodos relacionados a interações de usuários.
- `seller()`: Método dentro da rota `userInteraction` que retorna dados de vendedores.

Essa estrutura permite flexibilidade para chamadas adicionais a outros métodos e rotas, seguindo o mesmo padrão.

#### Outros exemplos

[Link da Documentação](https://docs.meeventos.com.br/)

```js
// User Interaction
Api.userInteraction.howMet().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

Api.userInteraction.eventType().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

Api.userInteraction.eventLocation().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Budgets
// Listar todos os orçamentos
Api.budget.list().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Listar orçamento de um determinado ID
let idOrcamento = 1;
Api.budget.list(idOrcamento).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Criar orçamento a partir de um objeto
let obj = {};
Api.budget.create(obj).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Clients
Api.client.getAllClients().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Listar todos os clientes
Api.client.list().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Listar cliente de um determinado ID
let idCliente = 1;
Api.client.list(idCliente).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Criar cliente a partir de um objeto
let obj = {};
Api.client.create(obj).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Atualizar cliente de um determinado ID e campos a serem atualizados
let objCampos = {};
Api.client.update(idCliente, objCampos).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Deletar cliente de um determinado ID
Api.client.delete(idCliente).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Events
// Listar todos os eventos
Api.event.list().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Listar evento de um determinado ID
let idEvento = 1;
Api.event.list(idEvento).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});

// Financeiro
// Listar todos os registros financeiros
Api.financial.list().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error.message);
});
```