// components/ImageWithText.js
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

const LandingPage = ({ imageSrc, heading, text }) => {
  return (
    <Box w="100vw" h="80vh" display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
      <Box flex={{ base: 1, md: 1 }} mr={{ md: 8 }}>
        <Image src='https://th.bing.com/th/id/R.94ed8333425fcb104f9256747d86d059?rik=WOpkyYSuc2S7dA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcartoon-brain-transparent%2fcartoon-brain-transparent-15.png&ehk=FYDyrEEtmnHgrmeF3dxk7sEebeJwKqnYy0ouXzMffYU%3d&risl=&pid=ImgRaw&r=0' alt="Image" w="100%" h="100%"  objectFit="cover" />
      </Box>
      <Box p={5} flex={{ base: 1, md: 1 }} ml={{ md: 8 }}>
        <Heading as="h2" size="xl" mb={4} color="white">
        Quizzy Quest: Embark on an Exciting Journey of Knowledge and Fun with Our Interactive Quiz Application!
        </Heading>
        <Text color="white" fontSize="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, deserunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deserunt ipsa eos aperiam animi blanditiis totam error corporis eius. Facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum quam consequuntur molestiae rerum necessitatibus. Fuga, cumque. Necessitatibus, ipsum sint.</Text>
      </Box>
    </Flex>

    </Box>
  );
};

export default LandingPage;
