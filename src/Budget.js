const Api = require("./Api");

class Budget extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1/budgets`;
  }

  // Lista todos os orçamentos ou exibe um orçamento de um determinado ID
  async list(id = null, json = {}) {
    let params = new URLSearchParams(json).toString();
    let endpoint = id ? `/${id}` : (json ? `?${params}` : '');

    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }

  // Cria um novo orçamento
  async create(data) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error("Você deve enviar os dados do orçamento");
    }
    return await this.post(this.path, data);
  }
}

module.exports = Budget;
