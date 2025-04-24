import * as clientRepo from './client.memory.repository';
import { IClient } from './client.model';
import Client from './client.model';

const getAll = async (): Promise<Client[]> => clientRepo.getAll();

const getById = async (id: string): Promise<Client | undefined> => clientRepo.getById(id);

const create = async (clientData: IClient): Promise<Client> => {
  const client = new Client(clientData);
  return clientRepo.create(client);
};

const update = async (id: string, clientData: Partial<IClient>): Promise<Client | null> => 
  clientRepo.update(id, clientData);

const remove = async (id: string): Promise<boolean> => {
  await orderRepo.removeByClientId(id);
  return clientRepo.remove(id);
};

const getClientOrders = async (clientId: string): Promise<any[]> => 
  clientRepo.getClientOrders(clientId);

export { getAll, getById, create, update, remove, getClientOrders };