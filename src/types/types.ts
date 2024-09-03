/** @format */

export interface User {
  name: string;
  phone: string;
  username: string;
  id: number;
  email: string;
}

export interface UsersStore {
  users: {
    value: { filteredUsers: User[]; users: User[]; filters: FiltersObj };
  };
}

export interface FiltersObj {
  name: string;
  username: string;
  email: string;
  phone: string;
}
