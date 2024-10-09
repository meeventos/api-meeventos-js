
const Client = require('./Client');
const Budget = require('./Budget');

class Meeventos {
  constructor(baseURL, apiKey) {

    this.baseURL =  baseURL;
    this.apiKey =  apiKey;

    this.client = new Client(this.baseURL, this.apiKey);

    this.budget = new Budget(this.baseURL, this.apiKey);
  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    this.client = new Client(this.baseUrl, this.apiKey);

    this.budget = new Budget(this.baseURL, this.apiKey);
  }

  // Setter para apiKey
  setApiKey(apiKey) {
    this.apiKey = apiKey;
    this.client = new Client(this.baseUrl, this.apiKey);

    this.budget = new Budget(this.baseURL, this.apiKey);
  }
}

module.exports = Meeventos;
