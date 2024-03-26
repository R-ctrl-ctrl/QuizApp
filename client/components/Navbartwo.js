import React, { useState } from "react";
import { Box, Flex, Text, Spacer, Link, Avatar, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi"; // Assuming you're using React Icons for the profile icon
import styles from '../src/app/page.module.css'

const Navbartwo = (props) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('jwttoken');
        router.push('/login');
    };

    

    const handleViewProfile = () => {
        router.push(`/profile/${props.name}`)
    };

    return (
        <Box h="10%" px={4} py={3}>
            <Flex h="full" alignItems="center">
                <Text color="white" fontWeight="bold" fontSize="28px">
                    Quizzy Quest
                </Text>
                <Spacer />
                <Text className={styles.nav_link} color="white" fontSize="20px" mr={20}>
                    <Link _hover={{ textDecoration: "none" }}>About Us</Link>
                </Text>
                <Text className={styles.nav_link} color="white" fontSize="20px" mr={20}>
                    <Link _hover={{ textDecoration: "none" }} href="/expired-quizes">Expired Quizzes</Link>
                </Text>
                <Text className={styles.nav_link} color="white" fontSize="20px" mr={20}>
                    <Link _hover={{ textDecoration: "none" }} href={`create-quiz/${props.name}`}>Create Quiz</Link>
                </Text>
                <Menu autoSelect={false} mr={20}>
                    <MenuButton>
                        <Avatar size="md" name="User Profile" icon={<FiUser />} cursor="pointer" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
};

export default Navbartwo;
