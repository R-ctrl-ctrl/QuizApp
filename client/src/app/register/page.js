"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import Link from "next/link";

const RegisterForm = () => {
  const [name, setName] = useState(""); // Initialize state variables with empty strings
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async () => {
    setLoading(true)
    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Please make sure your passwords match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false)
      return;
    }


    const formData = { name, email, password }
    const response = await fetch('https://quizzy-quest-gules.vercel.app/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json()
    if (data.message != "ok"){
      alert("Email Already exists")
    }
    else {
      alert("User Created")
      router.push('/login')
    }
    setLoading(false)
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
          <Button isLoading={loading} onClick={handleSubmit} colorScheme="teal" size="lg" mt={7} w="100%" type="submit">
            Register
          </Button>
          <Box mt={4} textAlign="center">
            <Link href="/login" color="teal.500">Already have an account? Login</Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
