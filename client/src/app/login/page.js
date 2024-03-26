"use client"
import React, { useState } from "react";
import { Box, Flex, Heading, Input, Button, FormControl, FormLabel, useToast, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Warning',
        description: "All fields are necessary!",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    const response = await fetch('https://quizzy-quest-gules.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if(data.status === "error"){
      alert("Wrong Credentials!");
      setLoading(false);
      return;
    }
    else{
      const token = data.user;
      localStorage.setItem("jwttoken", token);
      router.push("/");
    }
    setLoading(false);
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
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input placeholder="Username" size="lg" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password:</FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button isLoading={loading} onClick={handleClick} colorScheme="teal" size="lg" mt={8} w="100%">
            Sign In
          </Button>
          <Box mt={4} textAlign="center">
            <Link href="/register" color="teal.500">Don't have an account? Register</Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page;
