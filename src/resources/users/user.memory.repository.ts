const getAll = async (): Promise<User[]> => [];

interface User {
  id: string;
  name: string;
  login: string;
  password: string;
}

export { getAll };