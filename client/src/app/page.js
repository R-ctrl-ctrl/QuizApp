"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex, Link, Button, Heading } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';



export default function Home() {
  return (


    <Box bg="#F2F2F2">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="teal.500"
        width="100%"
        height="100vh"
        bgGradient="linear(to-r, teal.500, cyan.400, blue.500, purple.600)"
      >
        <Flex align="center">
          <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
            Company Name
          </Heading>
        </Flex>



        <Box>
          <Button variant="outline" mr={4}>
            Login
          </Button>
          <Button colorScheme="white" bg="teal.700">
            Register
          </Button>
        </Box>
      </Flex>




      <Box
        p={8}
        maxWidth={{ base: '90%', md: '50%' }}
        mx="auto"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="#294E80"
      >
        <Heading mb={6}>Create an Account</Heading>
        <form>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="John Doe" bg="white" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="john@example.com" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm Password" />
            </FormControl>
            <Button
              width="full"
              type="submit"
              colorScheme="orange.600"
              variant="solid"
            >
              Register
            </Button>
          </VStack>
        </form>
      </Box>

    </Box>
  );
}
