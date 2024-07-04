import React from 'react'
import { BASE_URL } from '../App';
import {
    Avatar,
    Card,
    CardHeader,
    Heading,
    Flex,
    Box,
    IconButton,
    Text,
    CardBody,
    useToast,
} from '@chakra-ui/react'
import { BiTrash } from "react-icons/bi";
import EditModal from './EditModal';

function FriendCard({ friend, setFriends }) {
    
    const toast = useToast();

    const handleDeleteFriend = async () => {
        try {
          const response = await fetch(`${BASE_URL}/friends/${friend.id}`, {
            method: "DELETE",
          });
          const data = await response.json();

          if (!response.ok) {
            throw new Error("Failed to delete friend");
          }

          // show a toast
          toast({
            title: "Delete Friend.",
            position: "top-center",
            description: data.msg,
            status: "success",
            duration: 4000,
            isClosable: true,
          });
            
          setFriends((friends) => friends.filter((f) => f.id !== friend.id));
        } catch (error) {
            toast({
              title: "Delete Friend.",
              position: "top-center",
              description: error.message,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
        }
    }

  return (
    <Card>
          <CardHeader>
              <Flex gap={4}>
                  <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                      <Avatar src={friend.imgUrl} />
                      <Box>
                          <Heading size={"sm"}>{friend.name}</Heading>
                          <Text>{friend.role}</Text>
                      </Box>
                  </Flex>
                  <Flex>
                      <EditModal friend={friend} setFriends={setFriends} />
                      <IconButton
                          variant="ghost"
                          colorScheme="red"
                          size={"sm"}
                          aria-label="See menu"
                          icon={<BiTrash size={20} />}
                          onClick={handleDeleteFriend}
                      />
                  </Flex>
              </Flex>
          </CardHeader>
          <CardBody>
              <Text>{friend.description}</Text>
          </CardBody>
    </Card>
  )
}

export default FriendCard
