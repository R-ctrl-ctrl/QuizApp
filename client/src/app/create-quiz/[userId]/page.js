"use client"
import { useEffect, useState } from 'react';
import { Flex, Input, Button, VStack, Box, Select, IconButton, Textarea } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const QuestionPage = () => {
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctOption: '' }]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [user, setuser] = useState()
    const router = useRouter()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('jwttoken');
            console.log(token)
            const response = await fetch('https://quizzy-quest-gules.vercel.app/verifytoken', {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });

            if (!response.ok) {
                router.push('/login')
                return;
            }

            const data = await response.json();
            setuser(data.user)
            console.log('Response:', data);
        };

        fetchData();
    }, [])

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[index][name] = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (e, questionIndex, optionIndex) => {
        const { value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setQuestions(updatedQuestions);
    };

    const handleCorrectOptionChange = (e, questionIndex) => {
        const { value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].correctOption = value;
        setQuestions(updatedQuestions);
    };

    const handleNextQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion.question.trim() === '' || currentQuestion.options.some(option => option.trim() === '') || currentQuestion.correctOption.trim() === '') {
            // Prevent adding a new question if any field is empty
            return;
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex === questions.length - 1) {
            setQuestions([...questions, { question: '', options: ['', '', '', ''], correctOption: '' }]);
        }
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleSubmit = async () => {
        if(!title || !description){
            alert("title and description are mandatory!")
            return
        }
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion.question.trim() === '' || currentQuestion.options.some(option => option.trim() === '') || currentQuestion.correctOption.trim() === '') {
            alert("Please fill in all fields before submitting.");
            return;
        }
        try {
            const data = questions.map(({ question, options, correctOption }) => ({
                question,
                options: JSON.stringify(options), // Stringify options array
                correctOption,
            }));
            const finaldata = { owner_name: user.name,title,description, data }
            const response = await fetch('https://quizzy-quest-gules.vercel.app/storequiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finaldata)
            });
            const d = await response.json();
            if (d.message == "ok") {
                alert("Data stored successfully!");
                router.push('/')
            }
            else {
                alert(d.message)
            }
        } catch (error) {
            console.error('Error storing quiz:', error.message);
            alert("Error storing quiz. Please try again later.");
        }
    };

    return (
        <Flex
            justify="center"
            align="center"
            h="100vh"
            bgGradient="linear(to-tr, teal.300, blue.500)"
        >
            <VStack w="50vw" spacing={4} maxW="lg" p={8} bg="white" borderRadius="lg" boxShadow="xl">
                <Box w="100%" bg="gray.100" p={4} borderRadius="md">
                    <Input
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        bg="white"
                        color="black"
                        mb={2}
                    />
                    <Textarea
                     resize={'none'}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        bg="white"
                        color="black"
                    />
                </Box>

                <Box w="full" display={"flex"} justifyContent={"space-between"}>
                    {currentQuestionIndex !== 0 ? (
                        <IconButton
                            aria-label="Previous"
                            icon={<ChevronLeftIcon />}
                            onClick={handlePreviousQuestion}
                            colorScheme="teal"
                            variant="outline"
                            alignSelf="flex-start"
                        />
                    )
                        :
                        <IconButton
                            aria-label="Previous"
                            icon={<ChevronLeftIcon />}
                            onClick={handlePreviousQuestion}
                            colorScheme="teal"
                            variant="outline"
                            alignSelf="flex-start"
                            visibility={"hidden"}
                        />
                    }
                    <IconButton
                        aria-label="Next"
                        icon={<ChevronRightIcon />}
                        onClick={handleNextQuestion}
                        colorScheme="teal"
                        variant="outline"
                        alignSelf="flex-end"
                    />
                </Box>
                <Box w="100%">
                    <Input
                        placeholder="Enter your question"
                        name="question"
                        value={questions[currentQuestionIndex].question}
                        onChange={(e) => handleInputChange(e, currentQuestionIndex)}
                        bg="lavender"
                        color="black"
                    />
                </Box>
                {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                    <Box key={optionIndex} w="100%">
                        <Input
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option}
                            onChange={(e) => handleOptionChange(e, currentQuestionIndex, optionIndex)}
                            bg="lightblue"
                            color="black"
                        />
                    </Box>
                ))}
                <Select
                    placeholder="Select correct option"
                    value={questions[currentQuestionIndex].correctOption}
                    onChange={(e) => handleCorrectOptionChange(e, currentQuestionIndex)}
                    bg="lightgreen"
                    color="black"
                >
                    {questions[currentQuestionIndex].options.map((_, index) => (
                        <option key={index} value={index}>Option {index + 1}</option>
                    ))}
                </Select>
                <Button onClick={handleSubmit} colorScheme="blue" w="40%" fontSize={"20px"}>Submit</Button>
            </VStack>
        </Flex>
    );
};

export default QuestionPage;
