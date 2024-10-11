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

  async list(id = null) {
    let endpoint = id ? `/${id}` : "";
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


  async delete(id ) {
    let endpoint = id ? `/${id}` : '';
    endpoint = `${this.path}${endpoint}`;

    return await this.delete(endpoint);
  }

}

module.exports = Client;
