import React, { useState } from 'react'
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

function DefinedModal({ isOpen, onClose, friend }) {
  
  const [value, setValue] = useState("male");
  const [data, setData] = useState({
    name: friend? friend.name : "",
    role: friend? friend.role : "",
    description: friend? friend.description : "",
    gender: friend? friend.gender : "male",
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>My new BFF 😍</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex alignItems={"center"} gap={4}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="John Doe" value={data.name} name='name' />
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input placeholder="Software Engineer" value={data.role} />
            </FormControl>
          </Flex>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              resize={"none"}
              overflowY={"hidden"}
              value={data.description}
              placeholder={
                "He's a software Engineer, who loves to code and build things."
              }
            />
          </FormControl>

          <RadioGroup onChange={setValue} defaultValue={data.gender} mt={4}>
            <Flex gap={5}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Femail</Radio>
            </Flex>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          {friend ? (
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
          ) : (
            <Button colorScheme="blue" mr={3}>
              Add
            </Button>
          )}
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DefinedModal
