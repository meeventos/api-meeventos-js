const Api = require("./Api");

class Events extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);
    this.path = `api/v1/events`;
  }

  async getData() {
    return await this.get(this.path);
  }

  async getDataById(id) {
    if (!id) {
      throw new Error('ID não fornecido');
    }

    const endpoint = `${this.path}/${id}`;
    return await this.get(endpoint);
  }
}

module.exports = Events;
