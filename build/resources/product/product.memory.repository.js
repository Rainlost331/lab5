let products = [];
const getAll = async () => [...products];
const getById = async (id) => products.find((product) => product.id === id);
const create = async (product) => {
    products.push(product);
    return product;
};
const update = async (id, updatedProduct) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        return products[index];
    }
    return null;
};
const remove = async (id) => {
    products = products.filter((product) => product.id !== id);
    return true;
};
const removeByOrderId = async (orderId) => {
    products = products.filter((product) => product.orderId !== orderId);
    return true;
};
export { getAll, getById, create, update, remove, removeByOrderId };
//# sourceMappingURL=product.memory.repository.js.map