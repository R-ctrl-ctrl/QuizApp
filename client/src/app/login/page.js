import React from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const page = () => {
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
            <Input placeholder="Username" size="lg" />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password:</FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              type="password"
            />
          </FormControl>
          <Button colorScheme="teal" size="lg" mt={8} w="100%">
            Sign In
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default page;
