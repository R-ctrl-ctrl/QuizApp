"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex, Link, Button, Heading, GridItem, Grid, Center } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import Navbar from "../../components/Navbarone";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import Navbarone from "../../components/Navbarone";
import Navbartwo from "../../components/Navbartwo";



export default function Home() {
  const [user, setuser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwttoken');
      console.log(token)
      const response = await fetch('http://localhost:8000/verifytoken', {
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });

      if (!response.ok) {
        router.push('/login')
      }

      const data = await response.json();
      setuser(data.user)
      console.log('Response:', data);
    };

    fetchData();
  }, [])

  return (
    <Box
      w="100vw"
      minH="100vh"
      bgGradient="linear(to-tr, teal.300, blue.500)"
    >
      {user ? (
        <Navbartwo name={user.name} />
      ) : (
        <Navbarone />
      )}
      <Center>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={16}
          p={4}
        >
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
