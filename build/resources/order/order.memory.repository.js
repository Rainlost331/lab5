let orders = [];
const getAll = async () => [...orders];
const getById = async (id) => orders.find((order) => order.id === id);
const create = async (order) => {
    orders.push(order);
    return order;
};
const update = async (id, updatedOrder) => {
    const index = orders.findIndex((order) => order.id === id);
    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedOrder };
        return orders[index];
    }
    return null;
};
const remove = async (id) => {
    orders = orders.filter((order) => order.id !== id);
    return true;
};
const getOrderProducts = async () => [];
const removeByClientId = async (clientId) => {
    orders = orders.filter((order) => order.clientId !== clientId);
    return true;
};
export { getAll, getById, create, update, remove, getOrderProducts, removeByClientId };
//# sourceMappingURL=order.memory.repository.js.map