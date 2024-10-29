// __tests__/User.test.js
require('dotenv').config();

const UserInteraction = require("../src/UserInteraction");
const Api = require("../src/Api");

// Mock da classe Api
jest.mock("../src/Api");

describe("UserInteraction Class", () => {
  let user;
  const baseURL = process.env.ME_BASE_URL;
  const apiKey = process.env.ME_API_KEY;

  beforeEach(() => {
    // Resetar mocks antes de cada teste
    Api.mockClear();

    // Instanciar a classe UserInteraction
    user = new UserInteraction(baseURL, apiKey);

    // Mockar implementações dos métodos get e post na instância correta
    Api.prototype.get.mockResolvedValue({}); // valor default se necessário
    Api.prototype.post.mockResolvedValue({});
  });

  describe("howMet method", () => {
    it('deve retornar a lista de "como conheceu"', async () => {
      const mockResponse = { result: "some data" };

      // Simulando a resposta da chamada GET
      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await user.howMet();

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/howmet`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("eventType method", () => {
    it("deve retornar a lista de tipos de eventos", async () => {
      const mockResponse = { result: "some data" };

      // Simulando a resposta da chamada GET
      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await user.eventType();

      expect(Api.prototype.get).toHaveBeenCalledWith(
        `${baseURL}api/v1/eventtype`
      );
      expect(response).toEqual(mockResponse);
    });
  });

  describe("seller method", () => {
    it("deve retornar a lista de vendedores", async () => {
      const mockResponse = { result: "some data" };

      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await user.seller();

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/seller`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("eventLocation method", () => {
    it("deve retornar uma lista com os locais do evento", async () => {
      const mockResponse = { result: "some data" };

      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await user.eventLocation();

      expect(Api.prototype.get).toHaveBeenCalledWith(
        `${baseURL}api/v1/eventlocation`
      );
      expect(response).toEqual(mockResponse);
    });
  });
});
