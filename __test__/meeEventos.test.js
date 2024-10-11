const MeEventos = require('../src/Meeventos');
const axios = require('axios');

jest.mock('axios');

const baseURL = '';
const apiKey = '';
let mee;

beforeEach(() => {
  mee = new MeEventos(baseURL, apiKey);
});

describe('Testes das rotas de eventos', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('list method', () => {
    it('deve retornar a lista de eventos quando não for passado um ID', async () => {
      let mockResponse = {
        data: [
          { id: 96, name: 'Evento Teste 1', date: '2024-10-10' },
          { id: 97, name: 'Evento Teste 2', date: '2024-11-11' },
        ],
      };

      axios.get.mockResolvedValueOnce(mockResponse);

      const data = await mee.list();
      expect(data).toEqual(mockResponse.data);
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}api/v1/events`, {
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      });
    });

    it('deve retornar os dados de um evento específico quando passado um ID', async () => {
      let eventId = 96;
      let mockResponse = {
        data: {
          id: eventId,
          name: 'Evento Teste',
          date: '2024-10-10',
        },
      };

      axios.get.mockResolvedValueOnce(mockResponse);

      const data = await mee.list(eventId);
      expect(data).toEqual(mockResponse.data);
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}api/v1/events/${eventId}`, {
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      });
    });

    it('deve lidar com erros ao chamar list com ID', async () => {
      const eventId = '96';
      const mockError = new Error('Erro ao buscar o evento');

      axios.get.mockRejectedValueOnce(mockError);

      await expect(mee.list(eventId)).rejects.toThrow("GET request failed: Erro ao buscar o evento");
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}api/v1/events/${eventId}`, {
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      });
    });

    it('deve lidar com erros ao chamar list sem ID', async () => {
      const mockError = new Error('Erro ao buscar a lista de eventos');

      axios.get.mockRejectedValueOnce(mockError);

      await expect(mee.list()).rejects.toThrow("GET request failed: Erro ao buscar a lista de eventos");
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}api/v1/events`, {
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      });
    });
  });
});
