import { v4 as uuidv4 } from 'uuid';

export interface IClient {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

class Client {
  id: string;
  name: string;
  email: string;
  phone: string;

  constructor({ id = uuidv4(), name = 'Client', email = 'client@example.com', phone = '' }: IClient = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  static toResponse(client: Client): Omit<Client, 'phone'> {
    const { id, name, email } = client;
    return { id, name, email };
  }
}

export default Client;