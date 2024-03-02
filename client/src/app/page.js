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
import Navbar from "../../components/Navbar";



export default function Home() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(to-tr, teal.300, blue.500)"
    >
      <Navbar/>
      
    </Box>
  );
}
