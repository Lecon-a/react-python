import React from 'react'
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
} from '@chakra-ui/react'
import { BiTrash } from "react-icons/bi";
import EditModal from './EditModal';

function FriendCard({friend}) {
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
                      <EditModal friend={friend} />
                      <IconButton
                          variant="ghost"
                          colorScheme="red"
                          size={"sm"}
                          aria-label="See menu"
                          icon={<BiTrash size={20} />}
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
