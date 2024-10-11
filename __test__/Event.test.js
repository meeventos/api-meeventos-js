// __tests__/Budget.test.js
require("dotenv").config();
const Event = require("../src/Event.js");
const Api = require("../src/Api.js");
// Mock da classe Api
jest.mock("../src/Api.js");

describe("Event Class", () => {
  let event;
  const baseURL = process.env.ME_BASE_URL;
  const apiKey = process.env.ME_API_KEY;
  beforeEach(() => {
    // Resetar mocks antes de cada teste
    Api.mockClear();
    // Mockar implementações dos métodos get e post
    Api.prototype.get = jest.fn();
    Api.prototype.post = jest.fn();
    // Instanciar a classe Event
    event = new Event(baseURL, apiKey);
  });
  describe("list method", () => {
    it("deve chamar o método get com o endpoint correto sem ID", async () => {
      const mockResponse = { id: 1, nome: "Orçamento 1" };
      Api.prototype.get.mockResolvedValue(mockResponse);
      const response = await event.list();
      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/events`);
      expect(response).toEqual(mockResponse);
    });
    it("deve chamar o método get com o endpoint correto com ID", async () => {
      const mockResponse = { id: 1, nome: "Orçamento 1" };
      Api.prototype.get.mockResolvedValue(mockResponse);
      const id = 1;
      const response = await event.list(id);
      expect(Api.prototype.get).toHaveBeenCalledWith(
        `${baseURL}api/v1/events/${id}`
      );
      expect(response).toEqual(mockResponse);
    });
  });
});
