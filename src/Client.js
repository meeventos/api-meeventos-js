const Api = require("./Api");

class Client extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1/clients`
  }

  async getAllClients() {
    const endpoint = this.path; 
    return await this.get(endpoint);
  }

  // Método que utiliza o GET para obter dados
  async getClientById(id = null) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }

  async createCliente() { // preciso passar o "data" como parametro aqui?
    const endpoint = this.path; 
    return await this.post(endpoint);
  }

  async updateCliente(id = null) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.post(endpoint);
  }

  async deleteCliente(id = null) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.delete(endpoint);
  }

}

module.exports = Client;
