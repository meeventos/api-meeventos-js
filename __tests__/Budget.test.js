// __tests__/Budget.test.js
require('dotenv').config();

const Budget = require('../src/Budget.js');
const Api = require('../src/Api.js');

// Mock da classe Api
jest.mock('../src/Api.js');

describe('Budget Class', () => {
  let budget;
  const baseURL = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;

  beforeEach(() => {
    // Resetar mocks antes de cada teste
    Api.mockClear();

    // Mockar implementações dos métodos get e post
    Api.prototype.get = jest.fn();
    Api.prototype.post = jest.fn();

    // Instanciar a classe Budget
    budget = new Budget(baseURL, apiKey);
  });

  describe('list method', () => {
    it('deve chamar o método get com o endpoint correto sem ID', async () => {
      const mockResponse = { id: 1, nome: 'Orçamento 1' };
      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await budget.list();

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/budgets`);
      expect(response).toEqual(mockResponse);
    });

    it('deve chamar o método get com o endpoint correto com ID', async () => {
      const mockResponse = { id: 1, nome: 'Orçamento 1' };
      Api.prototype.get.mockResolvedValue(mockResponse);

      const id = 1;
      const response = await budget.list(id);

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/budgets/${id}`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe('create method', () => {
    it('deve chamar o método post com os dados corretos', async () => {
      const data = { nome: 'Novo Orçamento' };
      const mockResponse = { id: 2, ...data };
      Api.prototype.post.mockResolvedValue(mockResponse);

      const response = await budget.create(data);

      expect(Api.prototype.post).toHaveBeenCalledWith(`${baseURL}api/v1/budgets`, data);
      expect(response).toEqual(mockResponse);
    });

    it('deve lançar um erro se os dados não forem fornecidos', async () => {
      await expect(budget.create()).rejects.toThrow('Você deve enviar os dados do orçamento');
      await expect(budget.create({})).rejects.toThrow('Você deve enviar os dados do orçamento');
    });
  });
});
