import React, { useState } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import CodeInput from '../components/CodeInput';
import CodeContext from '../components/context/CodeContext';
import HomeLayout from '../components/layouts/HomeLayout';
import Explanation from '../components/Explanation';
import Footer from '../components/Footer';

const Home = () => {
  const [explanation, setExplanation] = useState(null);

  return (
    <CodeContext.Provider
      value={{
        explanation,
        setExplanation,
      }}
    >
      <Stack spacing={10}>
        <Stack>
          <Heading fontSize='6xl' textAlign='center'>
            Code explained.
          </Heading>

          <Text textAlign='center' fontSize='xl' variant='gradient'>
            Understand code in seconds - powered by AI.
          </Text>
        </Stack>
        <CodeInput />
        <Explanation />
      </Stack>
      <Footer />
    </CodeContext.Provider>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
