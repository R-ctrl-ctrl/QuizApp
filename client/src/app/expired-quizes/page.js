"use client"
import React, { useEffect, useState } from 'react'
import Navbartwo from '../../../components/Navbartwo'
import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import MyCard from '../../../components/Card'

const Page = () => {
    const [quizes, setQuizes] = useState([])
    
    const fetchQuizes = async () => {
        try {
            const response = await fetch('https://quizzy-quest-gules.vercel.app/getquizdata', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json()
            if (data.message === "ok") {
                console.log(data)
                setQuizes(data.data)
            } else {
                alert("error fetching quizes")
            }
        } catch (error) {
            console.error("Error fetching quizes:", error)
            alert("Error fetching quizes. Please check console for details.")
        }
    }

    useEffect(() => {
        fetchQuizes();
    }, [])
    
    return (
        <Box
            w="100vw"
            minH="100vh"
            bgGradient="linear(to-tr, teal.300, blue.500)"
        >
            <Navbartwo />
            <Center>
                <Grid
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={16}
                    p={4}
                >
                    {quizes && quizes.map((data, key) => {
                        if (!data.disabled) {
                            return null; // Skip rendering if data.disabled is true
                        }
                        return (
                            <GridItem key={key}>
                                <MyCard data={data} val={1} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Center>
        </Box>
    )
}

export default Page
