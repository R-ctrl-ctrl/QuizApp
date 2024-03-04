// pages/leaderboard.js

import { Flex, Box, Heading, Text } from "@chakra-ui/react";

// Sample leaderboard data
const leaderboardData = [
  { id: 12456, username: "user2331dfgsgsd", score: 100 },
  { id: 2, username: "user2", score: 90 },
  { id: 3, username: "user3", score: 80 },
  { id: 3, username: "user3", score: 80 },
  { id: 3, username: "user3", score: 80 },
  { id: 3, username: "user3", score: 80 },
  { id: 3, username: "user3", score: 80 },
  { id: 3, username: "user3", score: 80 },
  // Add more data as needed
];

const Leaderboard = () => {
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
        width="90%"
        mb={4}
        display="flex"
        justifyContent="space-evenly"
      >
        <Text w="15%"  fontSize="lg" textAlign={"center"}>Rank</Text>
        <Text w="15%"  fontSize="lg" textAlign={"center"}>User ID</Text>
        <Text w="25%"  fontSize="lg" textAlign={"center"}>Username</Text>
        <Text w="15%"  fontSize="lg" textAlign={"center"}>Score</Text>
      </Box>
      {leaderboardData.map((player, index) => (
        <Box
          key={player.id}
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="md"
          color="teal.500"
          fontWeight="bold"
          width="90%"
          mb={4}
          display="flex"
          justifyContent="space-evenly" // Align items to center
        >
          <Text fontSize="lg" w="15%"   textAlign={"center"}>{index + 1}</Text>
          <Text
            fontSize="lg"
            w="15%"   textAlign={"center"} // Set the width of the User ID column
          >
            {player.id}
          </Text>
          <Text fontSize="lg" w="25%"   textAlign={"center"}>{player.username}</Text>
          <Text fontSize="lg" w="15%"   textAlign={"center"}>{player.score}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Leaderboard;
