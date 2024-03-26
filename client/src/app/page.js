"use client"
import Head from 'next/head';
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
import { useRouter } from "next/navigation";
import LandingPage from "../../components/LandingPage";



export default function Home() {
  const [user, setuser] = useState()
  const router = useRouter()
  const [quizes, setquizes] = useState([])

  const fetchquizes = async () => {
    const response = await fetch('https://quizzy-quest-gules.vercel.app/getquizdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json()
    if (data.message == "ok") {
      console.log(data)
      setquizes(data.data)
    }
    else {
      alert("error fetching quizes")
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwttoken');
      const response = await fetch('https://quizzy-quest-gules.vercel.app/verifytoken', {
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });
      const data = await response.json();
      setuser(data.user)
    };

    fetchData();
    fetchquizes();
  }, [])

  return (
    <Box
      w="100vw"
      minH="100vh"
      bgGradient="linear(to-tr, teal.300, blue.500)"
    >
        <Head>
                <title>Quizzy Quest</title>
            </Head>
      {user ? (
        <Box>
          <Navbartwo name={user.name} id={user._id} />
          <Center>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={16}
              p={4}
            >
              {quizes && quizes.map((data, key) => {
                if (data.disabled) {
                  return null; // Skip rendering if data.disabled is true
                }
                return (
                  <GridItem key={key}>
                    <Card data={data} val={0} />
                  </GridItem>
                )
              })}
            </Grid>
          </Center>
        </Box>

      ) : (
        <Box>
          <Navbarone />
          <LandingPage/>
        </Box>
      )}

    </Box>
  );
}
