import { Box, Text, Button } from "@chakra-ui/react";

const MyCard = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={6}
      bg="white" // Set the background color of the card
      color="teal.900" // Set text color
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        opacity={0.6}
        bgGradient="linear(to-tr, teal.300, blue.500)" // Apply the outer background gradient
      />
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Title of the Card
      </Text>
      <Text fontSize="md" mb={4}>
        Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean efficitur eget velit nec tempor. Donec congue mauris id diam
        pharetra, sed posuere libero fermentum.
      </Text>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Posted by: John Doe
      </Text>
      <Button colorScheme="teal">Attempt</Button>
    </Box>
  );
};

export default MyCard;
