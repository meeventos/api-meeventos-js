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
    Api.prototype.get.mockResolvedValue({});
    Api.prototype.post.mockResolvedValue({});
    Api.prototype.put.mockResolvedValue({});
    Api.prototype.delete.mockResolvedValue({});
  });

  describe("list method", () => {
    it("deve retornar a lista de clientes com paginação", async () => {
      const mockResponse = { result: "clientes paginados" };
      Api.prototype.get.mockResolvedValue(mockResponse);

      const params = { page: 1, limit: 10, field_sort: "nome", sort: "asc" };
      const response = await client.list(null, params);

      const calledWith = Api.prototype.get.mock.calls[0][0];
      expect(new URL(calledWith).searchParams.get("page")).toBe("1");
      expect(new URL(calledWith).searchParams.get("limit")).toBe("10");
      expect(new URL(calledWith).searchParams.get("field_sort")).toBe("nome");
      expect(new URL(calledWith).searchParams.get("sort")).toBe("asc");

      expect(response).toEqual(mockResponse);
    });

    it("deve retornar os dados do cliente pelo ID", async () => {
      const clientId = "123";
      const mockResponse = { result: "client data" };

      Api.prototype.get.mockResolvedValue(mockResponse);

      const response = await client.list(clientId);

      expect(Api.prototype.get).toHaveBeenCalledWith(`${baseURL}api/v1/clients/${clientId}`);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("create method", () => {
    it("deve criar um novo cliente", async () => {
      const mockData = { nome: "Novo Cliente" };
      const mockResponse = { result: "cliente criado" };

      Api.prototype.post.mockResolvedValue(mockResponse);

      const response = await client.create(mockData);

      expect(Api.prototype.post).toHaveBeenCalledWith(`${baseURL}api/v1/clients`, mockData);
      expect(response).toEqual(mockResponse);
    });
  });

  describe("update method", () => {
    it("deve atualizar um cliente existente", async () => {
      const clientId = "123";
      const mockData = { nome: "Cliente Atualizado" };
      const mockResponse = { result: "cliente atualizado" };

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

      Api.prototype.delete.mockResolvedValue(mockResponse);

      const response = await client.delete(clientId);

      expect(Api.prototype.delete).toHaveBeenCalledWith(`${baseURL}api/v1/clients/${clientId}`);
      expect(response).toEqual(mockResponse);
    });
  });
});
