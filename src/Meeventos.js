const Client = require('./Client');
const Financial = require('./Financial');
const Budget = require('./Budget');
const UserInteraction = require('./UserInteraction');


class Meeventos {
  constructor(baseURL, apiKey) {

    this.baseURL =  baseURL;
    this.apiKey =  apiKey;

    this.client = new Client(this.baseURL, this.apiKey);
    this.financial = new Financial(this.baseURL, this.apiKey);
    this.budget = new Budget(this.baseURL, this.apiKey);
    this.userInteraction = new UserInteraction(this.baseURL, this.apiKey);

  }

  setBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    this.client = new Client(this.baseUrl, this.apiKey);
    this.financial = new Financial(this.baseURL, this.apiKey);
    this.budget = new Budget(this.baseURL, this.apiKey);
    this.userInteraction = new UserInteraction(this.baseURL, this.apiKey);
  }

  // Setter para apiKey
  setApiKey(apiKey) {
    this.apiKey = apiKey;
    this.client = new Client(this.baseUrl, this.apiKey);
    this.financial = new Financial(this.baseURL, this.apiKey);
    this.budget = new Budget(this.baseURL, this.apiKey);
    this.userInteraction = new UserInteraction(this.baseURL, this.apiKey);

  }
}

module.exports = Meeventos;