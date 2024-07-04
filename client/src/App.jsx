import React, { useState } from "react";
import { Container, VStack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

export const BASE_URL = "http://127.0.0.1:5000/api/v1";

function App() {

  const [friends, setFriends] = useState([])

  return (
    <VStack minH={"100vh"}>
      <Navbar setFriends={setFriends} />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWidth={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={0}
        >
          <Text
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            MY FRIENDS
          </Text>
          🚀
        </Text>

        <UserGrid friends={friends} setFriends={setFriends} />
      </Container>
    </VStack>
  );
}

export default App;
