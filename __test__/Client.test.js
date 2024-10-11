const Client = require("../src/Client");
const Api = require("../src/Api");

// Mock da classe Api
jest.mock("../src/Api");

describe("Client Class", () => {
  let client;
  const baseURL = "https://teste.meeventos.com.br/empresateste/";
  const apiKey = "ffy1a-foq67-loxdk-mx6gr-drq8n";

  beforeEach(() => {
    // Resetar mocks antes de cada teste
    Api.mockClear();

    // Instanciar a classe Client
    client = new Client(baseURL, apiKey);

    // Mockar implementações dos métodos get, post, put e delete na instância correta
    Api.prototype.get.mockResolvedValue({}); // valor default se necessário
    Api.prototype.post.mockResolvedValue({});
    Api.prototype.put.mockResolvedValue({});
    Api.prototype.delete.mockResolvedValue({});
  });

  describe("list method", () => {
    it("deve retornar a lista de clientes", async () => {
      const mockResponse = { result: "some client data" };

      // Simulando a resposta da chamada GET para todos os clientes
      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await client.list(); // Chama sem ID para obter todos

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/clients`);
      expect(response).toEqual(mockResponse);
    });

    it("deve retornar os dados do cliente pelo ID", async () => {
      const clientId = "123";
      const mockResponse = { result: "client data" };

      // Simulando a resposta da chamada GET para um cliente específico
      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await client.list(clientId); // Chama com ID

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/clients/${clientId}`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("createCliente method", () => {
    it("deve criar um novo cliente", async () => {
      const mockData = { nome: "Novo Cliente" };
      const mockResponse = { result: "cliente criado" };

      // Simulando a resposta da chamada POST
      Api.prototype.post.mockResolvedValue(mockResponse);

      const response = await client.create(mockData);

      expect(Api.prototype.post).toHaveBeenCalledWith(`${baseURL}api/v1/clients`, mockData);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("updateCliente method", () => {
    it("deve atualizar um cliente existente", async () => {
      const clientId = "123";
      const mockData = { nome: "Cliente Atualizado" };
      const mockResponse = { result: "cliente atualizado" };

      // Simulando a resposta da chamada PUT
      Api.prototype.put.mockResolvedValue(mockResponse);

      const response = await client.update(clientId, mockData);

      expect(Api.prototype.put).toHaveBeenCalledWith(`${baseURL}api/v1/clients/${clientId}`, mockData);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("delete method", () => {
    it("deve deletar um cliente pelo ID", async () => {
      const clientId = "123";
      const mockResponse = { result: "cliente deletado" };

      // Simulando a resposta da chamada DELETE
      Api.prototype.delete.mockResolvedValue(mockResponse);

      const response = await client.delete(clientId);

      expect(Api.prototype.delete).toHaveBeenCalledWith(`${baseURL}api/v1/clients/${clientId}`);
      expect(response).toEqual(mockResponse);
    });
  });
});
