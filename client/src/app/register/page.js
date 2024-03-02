import React from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const RegisterForm = () => {
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
            <Input placeholder="Username" size="lg" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              placeholder="Email"
              size="lg"
              type="email"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              type="password"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              placeholder="Confirm Password"
              size="lg"
              type="password"
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" mt={7} w="100%">
            Register
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
