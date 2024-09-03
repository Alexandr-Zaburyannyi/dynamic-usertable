/** @format */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FiltersObj, User } from '../../types/types';

interface UsersState {
  value: {
    users: User[];
    filteredUsers: User[];
    filters: FiltersObj;
  };
}

const initialState: UsersState = {
  value: {
    users: [],
    filteredUsers: [],
    filters: {
      name: '',
      username: '',
      email: '',
      phone: '',
    },
  },
};

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.value.users = action.payload;
      state.value.filteredUsers = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.value.filteredUsers = action.payload;
    },
    setNameFilter: (state, action: PayloadAction<string>) => {
      state.value.filters.name = action.payload;
    },
    setUsernameFilter: (state, action: PayloadAction<string>) => {
      state.value.filters.username = action.payload;
    },
    setEmailFilter: (state, action: PayloadAction<string>) => {
      state.value.filters.email = action.payload;
    },
    setPhoneFilter: (state, action: PayloadAction<string>) => {
      state.value.filters.phone = action.payload;
    },
  },
});

export const {
  setUsers,
  setFilteredUsers,
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneFilter,
} = counterSlice.actions;

export default counterSlice.reducer;
