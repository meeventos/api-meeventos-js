
const Client = require('./Client');

class Meeventos {
  constructor(baseURL, apiKey) {

    this.baseURL =  baseURL;
    this.apiKey =  apiKey;

    this.client = new Client(this.baseURL, this.apiKey);
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    this.client = new Client(this.baseUrl, this.apiKey);
  }

  // Setter para apiKey
  setApiKey(apiKey) {
    this.apiKey = apiKey;
    this.client = new Client(this.baseUrl, this.apiKey);
  }
}

module.exports = Meeventos;
