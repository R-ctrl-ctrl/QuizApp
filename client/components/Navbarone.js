import React from "react";
import { Box, Flex, Text, Spacer, Link } from "@chakra-ui/react";
import styles from '../src/app/page.module.css'

const Navbarone = () => {
  return (
    <Box h="10%" px={4} py={3}>
      <Flex h="full" alignItems="center" justifyContent={"center"}>
        <Text color="white" fontWeight="bold" fontSize="28px" mr={8}>
        Quizzy Quest
        </Text>
        <Text className={styles.nav_link} color="white" fontSize="20px" ml={10} mr={4}>
          <Link _hover={{ textDecoration: "none" }}>About Us</Link>
        </Text>
        <Spacer />
        <Text className={styles.nav_link} color="white" fontSize="20px" mr={20} _hover={{ fontWeight: "bold" }}>
          <Link _hover={{ textDecoration: "none" }} href="/login">Login</Link>
        </Text>
        <Text className={styles.nav_link} color="white" fontSize="20px" mr={20} _hover={{ fontWeight: "bold" }}>
          <Link _hover={{ textDecoration: "none" }} href="/register">Register</Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbarone;
