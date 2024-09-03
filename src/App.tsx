/** @format */

import { Flex, Text } from '@mantine/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsers } from './store/slices/usersSlice';
import UsersTable from './components/UsersTable';
import { gradientColor } from './config/constants';
import { useMediaQuery } from '@mantine/hooks';

function App() {
  const dispatch = useDispatch();

  const min = useMediaQuery('(min-width: 700px)');

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
      m='auto'
      align='center'
      direction='column'
      w={'100%'}
      h={'100vh'}
      style={{
        overflow: 'visible',
        transform: min ? 'scale(1)' : 'scale(0.7)',
      }}
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
