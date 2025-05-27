import * as clientRepo from './client.memory.repository.js';
import * as orderRepo from '../order/order.memory.repository.js';
import Client from './client.model.js';
const getAll = async () => clientRepo.getAll();
const getById = async (id) => clientRepo.getById(id);
const create = async (clientData) => {
    const client = new Client(clientData);
    return clientRepo.create(client);
};
const update = async (id, clientData) => clientRepo.update(id, clientData);
const remove = async (id) => {
    await orderRepo.removeByClientId(id);
    return clientRepo.remove(id);
};
const getClientOrders = async (_clientId) => clientRepo.getClientOrders();
export { getAll, getById, create, update, remove, getClientOrders };
//# sourceMappingURL=client.service.js.map