/** @format */
import { useEffect } from 'react';
import { Input, InputBase, Table, Text } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { IMaskInput } from 'react-imask';
import { gradientColor } from '../config/constants';
import UsersList from './UsersList';
import { User, UsersStore } from '../types/types';
import {
  setEmailFilter,
  setFilteredUsers,
  setNameFilter,
  setPhoneFilter,
  setUsernameFilter,
} from '../store/slices/usersSlice';

const UsersTable = () => {
  const dispatch = useDispatch();
  const {
    filters: { email, name, phone, username },
    users,
  } = useSelector((state: UsersStore) => state.users.value);

  useEffect(() => {
    const filteredUsers =
      name || username || email || phone
        ? users.filter((user: User) =>
            user.name.toLowerCase().startsWith(name) &&
            user.username.toLowerCase().startsWith(username) &&
            user.email.toLowerCase().startsWith(email) &&
            user.phone.includes(phone)
              ? user
              : null
          )
        : users;
    dispatch(setFilteredUsers(filteredUsers));
  }, [name, username, email, phone, dispatch, users]);

  return (
    <Table
      mx={10}
      w={{
        md: '70%',
        lg: '95%',
        sm: '60%',
        xs: '40%',
      }}
      withColumnBorders
      // horizontalSpacing={{ lg: 'lg' }}
      verticalSpacing='sm'
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th w={'20%'}>
            <Text
              tt='capitalize'
              fw={600}
              variant='gradient'
              gradient={gradientColor}
            >
              Name
            </Text>

            <Text
              tt='capitalize'
              fw={500}
              fz={15}
              variant='gradient'
              gradient={gradientColor}
            >
              Filter by Name:
            </Text>
            <Input
              variant='filled'
              my={10}
              value={name}
              onChange={(event) => {
                return dispatch(setNameFilter(event.currentTarget.value));
              }}
            />
          </Table.Th>
          <Table.Th w={'20%'}>
            <Text
              tt='capitalize'
              fw={600}
              variant='gradient'
              gradient={gradientColor}
            >
              Username
            </Text>
            <Text
              tt='capitalize'
              fw={500}
              fz={15}
              variant='gradient'
              gradient={gradientColor}
            >
              Filter by Username:
            </Text>
            <Input
              variant='filled'
              my={10}
              value={username}
              onChange={(event) => {
                return dispatch(setUsernameFilter(event.currentTarget.value));
              }}
            />
          </Table.Th>
          <Table.Th w={'20%'}>
            <Text
              tt='capitalize'
              fw={600}
              variant='gradient'
              gradient={gradientColor}
            >
              Email
            </Text>
            <Text
              tt='capitalize'
              fw={500}
              fz={15}
              variant='gradient'
              gradient={gradientColor}
            >
              Filter by Email:
            </Text>
            <Input
              variant='filled'
              my={10}
              value={email}
              onChange={(event) => {
                return dispatch(setEmailFilter(event.currentTarget.value));
              }}
            />
          </Table.Th>
          <Table.Th w={'20%'}>
            <Text
              tt='capitalize'
              fw={600}
              variant='gradient'
              gradient={gradientColor}
            >
              Phone
            </Text>
            <Text
              tt='capitalize'
              fw={500}
              fz={15}
              variant='gradient'
              gradient={gradientColor}
            >
              Filter by Phone:
            </Text>
            <InputBase
              variant='filled'
              my={10}
              value={phone}
              component={IMaskInput}
              mask='000-000-0000'
              onChange={(event) => {
                return dispatch(setPhoneFilter(event.currentTarget.value));
              }}
            />
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <UsersList />
      </Table.Tbody>
    </Table>
  );
};
export default UsersTable;
