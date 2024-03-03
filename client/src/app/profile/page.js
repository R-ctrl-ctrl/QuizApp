import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bgGradient="linear(to-tr, teal.300, blue.500)" minHeight="100vh" py="50px">
      <Box maxW="1200px" mx="auto" bg="white" borderRadius="lg" boxShadow="xl" p="50px" textAlign="center">
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }} align="center" justify={{ base: "center", md: "space-between" }}>
          {/* Section 1: Profile Image, Name, Email */}
          <Box width={{ base: "100%", md: "40%" }} mb={{ base: "30px", md: 0 }} display="flex" flexDirection="column" justifyContent="center">
            <Image src="https://th.bing.com/th/id/R.e7e983048934045c740f76fbff8660b4?rik=9zD9iH%2fYoWwNQQ&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f7900000%2fJOHN-DOE-john-doe-7969094-2087-2560.jpg&ehk=dKqfE%2bfKIVEQ9raDF%2fINEmNe%2fo7SIK%2fGIajew7crglI%3d&risl=&pid=ImgRaw&r=0" alt="Profile Image" borderRadius="full" mx="auto" mb="20px" width="190px" height="190px" />
            <Text fontSize="xl" fontWeight="bold">John Doe</Text>
            <Text fontSize="xl" color="gray.500">johndoe@example.com</Text>
          </Box>

          {/* Section 2: Random Graph Image */}
          <Box width={{ base: "100%", md: "50%" }} height="100%" display="flex" alignItems="center">
            <Image src="https://rwibrokers.com/wp-content/uploads/2020/08/10.jpg" alt="Graph Image" borderRadius="lg" mx="auto" width="100%" height="auto" />
          </Box>
        </Flex>

        {/* Section 3: Cards with Quiz ID, Score, and Rank */}
        <Box width="100%" mt="50px">
          <Box bg="gray.100" borderRadius="lg" p="20px" mb="20px" display="flex" alignItems="center">
            <Text flex="1" fontSize="lg" fontWeight="bold" textAlign="left">Quiz ID: 123</Text>
            <Text flex="1" fontSize="lg" textAlign="center">Score: 85%</Text>
            <Text flex="1" fontSize="lg" textAlign="right">Rank: 3</Text>
          </Box>
          <Box bg="gray.100" borderRadius="lg" p="20px" display="flex" alignItems="center">
            <Text flex="1" fontSize="lg" fontWeight="bold" textAlign="left">Quiz ID: 456</Text>
            <Text flex="1" fontSize="lg" textAlign="center">Score: 92%</Text>
            <Text flex="1" fontSize="lg" textAlign="right">Rank: 1</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
