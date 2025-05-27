import * as clientRepo from './client.memory.repository.js';
import * as orderRepo from '../order/order.memory.repository.js';
import Client from './client.model.js';

const getAll = async (): Promise<Client[]> => clientRepo.getAll();

const getById = async (id: string): Promise<Client | undefined> => clientRepo.getById(id);

const create = async (clientData: Partial<Client>): Promise<Client> => {
  const client = new Client(clientData);
  return clientRepo.create(client);
};

const update = async (id: string, clientData: Partial<Client>): Promise<Client | null> => clientRepo.update(id, clientData);

const remove = async (id: string): Promise<boolean> => {
  await orderRepo.removeByClientId(id);
  return clientRepo.remove(id);
};

const getClientOrders = async (_clientId: string): Promise<unknown[]> => clientRepo.getClientOrders();

export { getAll, getById, create, update, remove, getClientOrders };