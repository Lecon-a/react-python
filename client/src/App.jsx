import React from "react";
import { Container, VStack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

function App() {
  return (
    <VStack minH={"100vh"}>
      <Navbar />

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
            MY BESTIES
          </Text>
          🚀
        </Text>

        <UserGrid />
        
      </Container>
    </VStack>
  );
}

export default App;
