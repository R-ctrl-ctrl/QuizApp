// pages/leaderboard.js
"use client"
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Leaderboard = ({ params }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://quizzy-quest-gules.vercel.app/quiz/${params.quizId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const data = await response.json();

        const results = data.data.results
        setLeaderboardData(results)
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to-tr, teal.300, blue.500)"
      p={8}
    >
      <Heading as="h1" size="xl" color="white" mb={8}>
        Leaderboard
      </Heading>
      <Box
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="md"
        color="teal.500"
        fontWeight="bold"
        width="70%"
        mb={4}
        display="flex"
        justifyContent="space-evenly"
      >
        <Text w="15%" fontSize="lg" textAlign={"center"}>Rank</Text>
        <Text w="25%" fontSize="lg" textAlign={"center"}>Username</Text>
        <Text w="15%" fontSize="lg" textAlign={"center"}>Score</Text>
      </Box>
      {Array.isArray(leaderboardData) && leaderboardData
        .filter(player => player.rank !== 0) // Filter out players with rank equal to 0
        .map((player, index) => (
          <Box
            key={player.id}
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            color="teal.500"
            fontWeight="bold"
            width="70%"
            mb={4}
            display="flex"
            justifyContent="space-evenly"
          >
            <Text fontSize="lg" w="15%" textAlign="center">{index + 1}</Text>
            <Text fontSize="lg" w="25%" textAlign="center">{player.username}</Text>
            <Text fontSize="lg" w="15%" textAlign="center">{player.score}</Text>
          </Box>
        ))
      }

    </Flex>
  );
};

export default Leaderboard;
