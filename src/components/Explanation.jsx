import { ScaleFade, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useContext } from 'react';
import CodeContext from './context/CodeContext';

const Explanation = () => {
  const { explanation } = useContext(CodeContext);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (explanation && !isOpen) onToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanation]);

  if (!explanation || explanation?.length < 1) return null;

  return (
    <Stack
      bgGradient='linear(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
      p={6}
      px={20}
      rounded='md'
      w={{ base: '80vw', lg: '50vw' }}
      alignSelf='center'
      spacing={10}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Text fontWeight='bold' textAlign='center' fontSize='3xl'>
          What is means
        </Text>
        <Text style={{ whiteSpace: 'pre-line' }}>{explanation[0]?.text}</Text>
      </ScaleFade>
    </Stack>
  );
};

export default Explanation;
