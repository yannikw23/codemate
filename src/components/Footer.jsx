import { Box, Link, Text } from '@chakra-ui/react';

import React from 'react';

const Footer = () => {
  return (
    <Box w='full' color='gray.600'>
      <Text textAlign='center'>
        built in sf &amp; munich by{' '}
        <Link isExternal href={'https://twitter.com/yannik_wo'}>
          @yannik_wo
        </Link>{' '}
        with help of OpenAI.
      </Text>
    </Box>
  );
};

export default Footer;
