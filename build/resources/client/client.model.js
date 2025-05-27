import { v4 as uuidv4 } from 'uuid';
class Client {
    id;
    name;
    email;
    phone;
    constructor({ id = uuidv4(), name = 'Client', email = 'client@example.com', phone = '' } = {}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    static toResponse(client) {
        const { id, name, email, phone } = client;
        return { id, name, email, phone };
    }
}
export default Client;
//# sourceMappingURL=client.model.js.map