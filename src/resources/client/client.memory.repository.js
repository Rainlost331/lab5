let clients = [];

const getAll = async () => [...clients];

const getById = async (id) => clients.find((client) => client.id === id);

const create = async (client) => {
  clients.push(client);
  return client;
};

const update = async (id, updatedClient) => {
  const index = clients.findIndex((client) => client.id === id);
  if (index !== -1) {
    clients[index] = { ...clients[index], ...updatedClient };
    return clients[index];
  }
  return null;
};

const remove = async (id) => {
  clients = clients.filter((client) => client.id !== id);
  return true;
};

const getClientOrders = async () => [];

export { getAll, getById, create, update, remove, getClientOrders };