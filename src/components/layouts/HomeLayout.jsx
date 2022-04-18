import { Container, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header';

const HomeLayout = ({ children }) => {
  return (
    <Stack w='100vw' minH='100vh' bgColor='gray.900' color='white' alignItems={'center'}>
      <Header />
      <Container maxW='6xl' pt={4} pb={8}>
        {children}
      </Container>
    </Stack>
  );
};

export default HomeLayout;
