const Api = require("./Api");

class UserInteraction extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);

    this.path = `${baseURL}api/v1`;
  }

    // Método para obter a lista de como conheceu a Meeventos
  async howMet() {
    let endpoint = `${this.path}/howmet`;
    return await this.get(endpoint);
  }

  // Retorna a lista de tipos de eventos
  async eventType() {
    let endpoint = `${this.path}/eventtype`;
    return await this.get(endpoint);
  }

    // Retorna a lista de vendedores do sistema
  async seller() {
    let endpoint = `${this.path}/seller`;
    return await this.get(endpoint);
  }

    // Retorna a lista de locais de eventos cadastrados no sistema
  async eventLocation() {
    let endpoint = `${this.path}/eventlocation`;
    return await this.get(endpoint);
  }
}

module.exports = UserInteraction;
