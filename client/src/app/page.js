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
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";



export default function Home() {

  function handleClick(){
    console.log("hell")
    alert("Hell")
  }

  return (
    <Box
      w="100vw"
      minH="100vh"
      bgGradient="linear(to-tr, teal.300, blue.500)"
    >
      <Navbar />
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
