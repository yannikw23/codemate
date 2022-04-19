import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';

const Config = ({ params, setParams, isOpen, onClose }) => {
  const handleSetParams = (key, value) => {
    const newParams = {
      ...params,
      [key]: value,
    };
    console.log('newParams', newParams);
    setParams(newParams);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor='blackAlpha.700' backdropFilter='auto' backdropBlur='5px' />
        <ModalContent bgColor='gray.700' color='white'>
          <ModalHeader>Configuration</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
              <FormLabel htmlFor='amount'>Temperature</FormLabel>
              <NumberInput
                max={1}
                min={0}
                step={0.1}
                onChange={(value) => handleSetParams('temperature', value)}
                defaultValue={1.0}
                value={params?.temperature}
              >
                <NumberInputField id='amount' />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Config;
