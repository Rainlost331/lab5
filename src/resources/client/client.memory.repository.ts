import Client from './client.model';

let clients: Client[] = [];

const getAll = async (): Promise<Client[]> => [...clients];

const getById = async (id: string): Promise<Client | undefined> => 
  clients.find((client) => client.id === id);

const create = async (client: Client): Promise<Client> => {
  clients.push(client);
  return client;
};

const update = async (id: string, updatedClient: Partial<Client>): Promise<Client | null> => {
  const index = clients.findIndex((client) => client.id === id);
  if (index !== -1) {
    clients[index] = { ...clients[index], ...updatedClient };
    return clients[index];
  }
  return null;
};

const remove = async (id: string): Promise<boolean> => {
  clients = clients.filter((client) => client.id !== id);
  return true;
};

const getClientOrders = async (clientId: string): Promise<any[]> => {
  // Implemented in order service
  return [];
};

export { getAll, getById, create, update, remove, getClientOrders };