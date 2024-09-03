/** @format */

import { useSelector } from 'react-redux';
import { User, UsersStore } from '../types/types';
import { Table, Text } from '@mantine/core';
import { gradientColor } from '../config/constants';

const UsersList = () => {
  const { filteredUsers } = useSelector(
    (state: UsersStore) => state.users.value
  );

  return filteredUsers.map(({ name, username, email, phone }: User) => {
    return (
      <Table.Tr key={username}>
        <Table.Td w={'20%'}>
          <Text
            fw={600}
            variant='gradient'
            gradient={gradientColor}
          >
            {name}
          </Text>
        </Table.Td>
        <Table.Td w={'20%'}>
          <Text
            fw={600}
            variant='gradient'
            gradient={gradientColor}
          >
            {username}
          </Text>
        </Table.Td>
        <Table.Td w={'20%'}>
          <Text
            fw={600}
            variant='gradient'
            gradient={gradientColor}
            lineClamp={2}
            truncate
          >
            {email}
          </Text>
        </Table.Td>
        <Table.Td w={'20%'}>
          <Text
            fw={600}
            variant='gradient'
            gradient={gradientColor}
          >
            {phone}
          </Text>
        </Table.Td>
      </Table.Tr>
    );
  });
};
export default UsersList;
