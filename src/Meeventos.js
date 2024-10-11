const axios = require('axios');

class MeEventos {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`;
    this.apiKey = apiKey.trim();
    this.events = this;
  }

  async getDataById(id) {
    try {
      const response = await axios.get(`${this.baseURL}api/v1/events/${id}`, {
        headers: {
          Authorization: this.apiKey,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.data || !response.data.id) {
        throw new Error('ID não encontrado na resposta.');
      }
  
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(`GET request failed: ${error.message || 'Erro desconhecido'}`);
    }
  }
  
  
  async list(id) {
    try {
      const endpoint = id ? `api/v1/events/${id}` : 'api/v1/events';
      const response = await axios.get(`${this.baseURL}${endpoint}`, {
        headers: {
          Authorization: this.apiKey,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  }

  async getData() {
    try {
      const headers = {
        Authorization: `${this.apiKey}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(`${this.baseURL}api/v1/events`, {
        headers,
      });
      
      // Verifica se a resposta indica erro
      if (response.data.status === 'error') {
        throw new Error(response.data.message);
      }
      
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error(`GET request failed: ${error.message || 'Erro desconhecido'}`);
    }
  }
}

module.exports = MeEventos;