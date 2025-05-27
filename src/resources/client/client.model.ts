import { v4 as uuidv4 } from 'uuid';

interface ClientConstructor {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

class Client {
  public id: string;
  public name: string;
  public email: string;
  public phone: string;

  constructor({ id = uuidv4(), name = 'Client', email = 'client@example.com', phone = '' }: ClientConstructor = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  static toResponse(client: Client): { id: string; name: string; email: string; phone: string } {
    const { id, name, email, phone } = client;
    return { id, name, email, phone };
  }
}

export default Client;