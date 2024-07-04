import React from 'react'
import { Container, Box, Flex, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import CreateUserModal from './CreateUserModal';

function Navbar() {
    
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={useColorModeValue("gray.200", "gray.700")}>
            {/* left side */}
            <Flex h='16' alignItems={"center"} justifyContent={"space-between"}>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={3}
                display={{ base: "none", sm: "flex" }}
            >
                <img src="/react.svg.png" alt="react logo" width={50} height={50} />
                <Text fontSize={"40px"}>+</Text>
                <img src="/python.png" alt="python logo" width={50} height={40} />
                <Text fontSize={"40px"}>=</Text>
                <img
                src="/explode.svg"
                alt="explode head logo"
                width={45}
                height={45}
                />
            </Flex>
            {/* right side */}
            <Flex gap={3} alignItems={"center"}>
                <Text
                fontSize={"lg"}
                fontWeight={500}
                display={{ base: "none", md: "block" }}
                color={"white"}
                >
                8FFShip 🔥
                </Text>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
                </Button>
                <CreateUserModal />
            </Flex>
            </Flex>
        </Box>
        </Container>
    );
}

export default Navbar
