/** @format */

import { Flex, Text } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsers } from './store/slices/usersSlice';
import UsersTable from './components/UsersTable';
import { gradientColor } from './config/constants';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch(setUsers(data));
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <Flex
      align='center'
      direction='column'
    >
      <Text
        tt='capitalize'
        size='xl'
        fw={900}
        variant='gradient'
        gradient={gradientColor}
        component='h1'
      >
        Users Table
      </Text>
      <UsersTable />
    </Flex>
  );
}

export default App;
