const Api = require("./Api");

class Event extends Api {
  constructor(baseURL, apiKey) {
    super(baseURL, apiKey);
    this.path = `${baseURL}api/v1/events`;
  }

  // Lista todos os eventos ou exibe um evento de um determinado ID
  async list(id = null, json = {}) {
    let params = new URLSearchParams(json).toString();
    let endpoint = id ? `/${id}` : json ? `?${params}` : "";

    endpoint = `${this.path}${endpoint}`;

    return await this.get(endpoint);
  }
}

module.exports = Event;