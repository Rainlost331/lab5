import * as usersRepo from './user.memory.repository.js';

const getAll = (): Promise<User[]> => usersRepo.getAll();

interface User {
  id: string;
  name: string;
  login: string;
  password: string;
}

export { getAll };