"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";

const RegisterForm = () => {
  const [name, setName] = useState(""); // Initialize state variables with empty strings
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      // Display error toast if passwords don't match
      toast({
        title: "Password Mismatch",
        description: "Please make sure your passwords match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      // Create form data object to send in the request body
      const formData = {
        name,
        email,
        password,
      };

      // Send POST request to server
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convert form data to JSON string
      });
      console.log(formData);
      if (response.ok) {
        // Display success toast if registration is successful
        toast({
          title: "Registration Successful",
          description: "You have successfully registered.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push('/'); // Redirect to home page after successful registration
      } else {
        const data = await response.json();
        // Display error toast with error message from server
        toast({
          title: "Registration Failed",
          description: data.message || "An error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Registration Error:", error);
      // Display generic error toast if an error occurs during registration
      toast({
        title: "Registration Error",
        description: "An error occurred during registration.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username:</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" size="lg" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email:</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" size="lg" type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password:</FormLabel>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" size="lg" type="password" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Confirm Password:</FormLabel>
              <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" size="lg" type="password" />
            </FormControl>
            <Button colorScheme="teal" size="lg" mt={7} w="100%" type="submit">
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
