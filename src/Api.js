const axios = require("axios");

class Api {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.apiKey}`,
      },
    });
  }

  // Método auxiliar para requisições GET
  async get(endpoint) {
    try {
      const response = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  }

  // Método auxiliar para requisições POST
  async post(endpoint, data) {
    try {
      const response = await this.client.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  }

  async put(endpoint, data) {
    try {
      const response = await this.client.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(`PUT request failed: ${error.message}`);
    }
  }

 async delete(endpoint) {
    try {
      const response = await this.client.DELETE(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(`DELETE request failed: ${error.message}`);
    }
  }
}

module.exports = Api;
