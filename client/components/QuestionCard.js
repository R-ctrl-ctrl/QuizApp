import { Box, Button, Flex, Radio, RadioGroup, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const QuestionCard = ({questionData, selectedOption, onPrevious, onNext, onSubmit, handleOptionChange, questionCount }) => {
  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md" w="40%">
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Button onClick={onPrevious} visibility={questionData.index === 0 ? "hidden" : "visible"}>
          <FaArrowLeft />
        </Button>
        <Button onClick={onNext} visibility={questionData.index === questionCount - 1 ? "hidden" : "visible"}>
          <FaArrowRight />
        </Button>
      </Flex>
      <Text fontSize="25px">{questionData.question}</Text>
      <RadioGroup value={selectedOption} onChange={handleOptionChange}>
        <Flex direction="column">
          {questionData && questionData.options.map((option, index) => (
            <Radio size={"lg"} colorScheme={"green"} key={index} p={1} value={option}>
              {option}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>
      <Box w="100%" display={"flex"} justifyContent={"center"}>
        <Button w="10vw" colorScheme={"blue"} mt={6} onClick={onSubmit} disabled={!selectedOption}>
          Submit
        </Button>
      </Box>
    </Box>

  );
};

export default QuestionCard;
