"use client"
import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";

const page = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const toast = useToast()

  const handleClick = async () => {
    alert('hello')
    if (!email || !password) {
      toast({
        title: 'Warning',
        description: "All fields are necessary!",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      return;
    }
  }
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-tr, teal.300, blue.500)"
    >
      <Box
        p={8}
        w="40%"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input placeholder="Username" size="lg" onChange={(e)=>setemail(e.target.value)} />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password:</FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              type="password"
              onChange={(e)=>setpassword(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleClick} colorScheme="teal" size="lg" mt={8} w="100%">
            Sign In
          </Button>
          <button onClick={handleClick}>click me </button>
        </Box>
      </Box>
    </Flex>
  );
};

export default page;
