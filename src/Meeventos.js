const Client = require('./Client');
const Financial = require('./Financial');
const Budget = require('./Budget');
const UserInteraction = require('./UserInteraction');

const Event = require('./Event');


class Meeventos {
  constructor(baseURL, apiKey) {

    this.baseURL =  baseURL;
    this.apiKey =  apiKey;

    this.client = new Client(this.baseURL, this.apiKey);
    this.financial = new Financial(this.baseURL, this.apiKey);
    this.budget = new Budget(this.baseURL, this.apiKey);
    this.userInteraction = new UserInteraction(this.baseURL, this.apiKey);

    this.event = new Event(this.baseURL, this.apiKey);

  }
}

module.exports = Meeventos;