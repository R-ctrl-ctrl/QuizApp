"use client"
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LineGraph from "../../../../components/LineGraph";

const Home = ({ params }) => {
  const [responses, setResponses] = useState([]);
  const [gdata, setgdata] = useState([])
  useEffect(() => {
    const fetchResponses = async () => {

      try {
        const response = await fetch(`https://quizzy-quest-gules.vercel.app/api/users/${params.username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch responses');
        }
        const data = await response.json();
        setResponses(data.responses);
        const arr  = []
        let i = 0;
        for (const obj of data.responses) {
          const rank = obj.rank
          arr.push({ x: i + 1, y: rank });
          i = i+1;
        }
        setgdata(arr)
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    };

    fetchResponses();
  }, []);


  return (
    <Box bgGradient="linear(to-tr, teal.300, blue.500)" minHeight="100vh" py="50px">
      <Box maxW="1200px" mx="auto" bg="white" borderRadius="lg" boxShadow="xl" p="50px" textAlign="center">
          <Box width="100vh" height="50vh" display="flex" alignItems="center">
            {gdata.length != 0  && <LineGraph data={gdata} />}
          </Box>
        {/* Section 3: Cards with Quiz ID, Score, and Rank */}
        <Box width="100%" mt="50px">
          {responses.map((response, index) => (
            <Box key={index} bg="gray.100" borderRadius="lg" p="20px" display="flex" alignItems="center" mb="10px">
              <Text flex="1" fontSize="lg" fontWeight="bold" textAlign="left">Quiz ID: {response.quiz_id}</Text>
              <Text flex="1" fontSize="lg" textAlign="center">Score: {response.score}</Text>
              <Text flex="1" fontSize="lg" textAlign="right">Rank: {response.rank}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
