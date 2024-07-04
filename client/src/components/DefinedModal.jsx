import React, { useState } from 'react'
import {
  Modal,
  Button,
  Box,
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
  useToast,
} from "@chakra-ui/react";
import { BASE_URL } from '../App';

function DefinedModal({ isOpen, onClose, friend, setFriends }) {

  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [data, setData] = useState({
    name: friend? friend.name : "",
    role: friend? friend.role : "",
    description: friend? friend.description : "",
    gender: friend? friend.gender : "male",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    });
  }

  const validate = (data) => {
    let errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.role) errors.role = "Role is required";
    if (!data.description) errors.description = "Description is required";
    return Object.keys(errors).length === 0? null : errors;
  }

  const submit = async (e) => {
    e.preventDefault();
    // Here you can send data to your API
    if (validate(data)) {
      const {name, role, description} = validate(data);
      toast({
        title: " 🚷! An error occurred.",
        description: "Please, enter valid value for the field.",
        status: "error",
        position: "top-center",
        duration: 4000,
        isClosable: true,
      });
      return null;
    }
    setIsLoading(true);
    try {
      const response = await fetch(friend? `${BASE_URL}/friends/${friend.id}` : `${BASE_URL}/friends`, {
        method: friend? "PATCH" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json_data = await response.json();

      if (!response.ok) {
        throw new Error("Failed to add friend");
      }
      // show a toast
      toast({
        title: "Yayy! 👍 Account created.",
        position: "top-center",
        description: !friend
          ? "New friend has been created successfully."
          : "Friend record updated successfully",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      
      !friend ? setFriends(previousFriends => [...previousFriends, json_data]) :
        setFriends(previousFriends => [...previousFriends]);
      setData({
        ...data,
        name: "",
        role: "",
        description: "",
        gender: "male",
      });
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        position: "top-center",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      onClose(true)
    }
  }

  const handleOnClose = () => {
    setData({
      ...data,
      name: friend? friend.name : "",
      role: friend? friend.role : "",
      description: friend? friend.description : "",
      gender: friend? friend.gender : "male",
    });
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={submit}>
        <ModalContent>
          <ModalHeader textAlign={"center"}>My new BFF 😍</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="John Doe"
                  value={data.name}
                  onChange={handleOnChange}
                  name="name"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input
                  placeholder="Software Engineer"
                  value={data.role}
                  name="role"
                  onChange={handleOnChange}
                />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                onChange={handleOnChange}
                value={data.description}
                name="description"
                placeholder={
                  "He's a software Engineer, who loves to code and build things."
                }
              />
            </FormControl>

            <RadioGroup name="radio" defaultValue={data.gender} mt={4}>
              <Flex gap={5}>
                <Radio name="gender" value="male" onChange={handleOnChange}>
                  Male
                </Radio>
                <Radio name="gender" value="female" onChange={handleOnChange}>
                  Femail
                </Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              isLoading={isLoading}
            >
              {friend ? "Update" : "Add"}
            </Button>
            <Button mr={3} onClick={handleOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default DefinedModal
