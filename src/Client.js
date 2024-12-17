const Api = require("./Api");

class Client extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);
    this.path = `${baseURL}api/v1/clients`;
  }

  async list(id = null, json = {}) {
    let params = new URLSearchParams(json).toString();
    let endpoint = id ? `/${id}` : json ? `?${params}` : "";

    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }

  async create(data) {
    const endpoint = this.path;
    return await this.post(endpoint, data);
  }

  async update(id, data) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.put(endpoint, data);
  }

  async delete(id) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;
    return await super.delete(endpoint);
  }
}

module.exports = Client;
