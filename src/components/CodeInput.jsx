import React, { useState, useContext } from 'react';
import { Button, Stack, useToast, VStack } from '@chakra-ui/react';
import CodeContext from './context/CodeContext';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { showErrorToast } from '../lib/utils/toast';

const MAX_INPUT_LENGTH = 1000;
const API_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_VERCEL_URL : process.env.NEXT_PUBLIC_API_URL;

const CodeInput = () => {
  const [code, setCode] = React.useState(`function add(a, b) {\n  return a + b;\n}`);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { setExplanation } = useContext(CodeContext);

  const checkInputForErrors = (input) => {
    if (!input || input.length < 1) return true;
    if (input.length > MAX_INPUT_LENGTH) return true;

    return false;
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const hasError = checkInputForErrors();
      const res = await fetch(`${API_URL}/api/code/explainCode`, {
        method: 'POST',
        body: JSON.stringify({ input: code }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const response = await res.json();
      if (!response) throw new Error('No response returned.');

      const {
        data: { error, choices },
      } = response;

      setExplanation(choices);
    } catch (error) {
      showErrorToast(toast, error.message);
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack>
      <Stack w={{ base: 'full', lg: '50vw' }} rounded='md' bgColor='gray.800' p={4} _focus={{ border: 'none' }} position='relative'>
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          maxLength={MAX_INPUT_LENGTH}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: '1rem',
          }}
        />
        <Button display={{ base: 'none', md: 'flex' }} position='absolute' top={4} right={6} variant='ghost' size='xs'>
          Random
        </Button>
      </Stack>

      <Button
        bgGradient='linear(to right,#b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
        animation='gradient-animation 10s ease infinite'
        _hover={{}}
        onClick={onSubmit}
        isLoading={loading}
        w='full'
      >
        Explain this snippet
      </Button>
    </VStack>
  );
};

export default CodeInput;
