"use client"
import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";

const RegisterForm = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [conpassword, setconpassword] = useState()
  const toast = useToast()
  const handleClick = async () => {
    alert("Hello")
  

    

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
          <Heading>Register</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl>
            <FormLabel>Username:</FormLabel>
            <Input onChange={(e)=>setname(e.target.value)} placeholder="Username" size="lg" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              placeholder="Email"
              size="lg"
              type="email"
              onChange={(e)=>setemail(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              type="password"
              onChange={(e)=>setpassword(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              placeholder="Confirm Password"
              size="lg"
              type="password"
              onChange={(e)=>setconpassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" mt={7} w="100%" onClick={handleClick}>
            Register
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
