let clients: Client[] = [];

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const getAll = async (): Promise<Client[]> => [...clients];

const getById = async (id: string): Promise<Client | undefined> => clients.find((client) => client.id === id);

const create = async (client: Client): Promise<Client> => {
  clients.push(client);
  return client;
};

const update = async (id: string, updatedClient: Partial<Client>): Promise<Client | null> => {
  const index = clients.findIndex((client) => client.id === id);
  if (index !== -1) {
    clients[index] = { ...clients[index], ...updatedClient } as Client;
    return clients[index];
  }
  return null;
};

const remove = async (id: string): Promise<boolean> => {
  clients = clients.filter((client) => client.id !== id);
  return true;
};

const getClientOrders = async (): Promise<unknown[]> => [];

export { getAll, getById, create, update, remove, getClientOrders };