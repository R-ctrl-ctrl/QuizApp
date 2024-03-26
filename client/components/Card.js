import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const MyCard = (props) => {
  const router = useRouter()
  const handleClick1 = (id) => {
    router.push(`/attempt/${id}`)
  }
  const handleClick2 = (id) => {
    router.push(`/leaderboard/${id}`)
  }
  
  return (
    <Box
  w="400px" // Set a wider fixed width
  h="35vh" // Set a slightly reduced fixed height
  borderWidth="1px"
  borderRadius="lg"
  overflow="hidden"
  boxShadow="md"
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
  <Flex
    direction="column"
    justifyContent="space-between"
    h="100%"
    p={6}
  >
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {props.data.title}
      </Text>
      <Text fontSize="md" mb={4}>
        {props.data.description}
      </Text>
      <Text fontSize="sm" color="gray.500" mb={2}>
        Posted by: {props.data.owner_name}
      </Text>
    </Box>
    <Flex
      justify="flex-start" // Align the button to the left
      width="100%" // Take up full width
    >
      {props.val === 0 ? (
        <Button colorScheme="teal" onClick={() => { handleClick1(props.data._id) }}>Attempt</Button>
      ) : (
        <Button colorScheme="red" onClick={() => { handleClick2(props.data._id) }}>View Leaderboard</Button>
      )}
    </Flex>
  </Flex>
</Box>

  );
};

export default MyCard;
