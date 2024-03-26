"use client"
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuestionCard from "../../../../components/QuestionCard";
import { useRouter } from "next/navigation";

const QuizPage = ({ params }) => {
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Declaration of currentQuestionIndex
  const [user, setuser] = useState()
  const router = useRouter()
  // code for route protection and sroting user object
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


  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`https://quizzy-quest-gules.vercel.app/api/quiz/${params.QuizId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const data = await response.json();
        setQuestionsData(data.data);

        // Initialize selectedOptions array with null values for each question
        setSelectedOptions(Array(data.data.length).fill(""));
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData()
    fetchQuizData();
  }, [params.QuizId]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (value, index) => {
    setSelectedOptions(prevOptions => {
      const newOptions = [...prevOptions];
      newOptions[index] = value;
      return newOptions;
    });
  };

  const handleSubmit = async () => {
    let score = 0;
    selectedOptions.forEach((selectedOption, index) => {
      const correctOption = questionsData[index].options[parseInt(questionsData[index].correctOption)];
      if (!selectedOption) {
        let a = 0;
      }
      else if (correctOption === selectedOption.toString()) {
        score++;
      }
    });

    try {
      const response = await fetch("http://localhost:8000/quiz-response", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({quiz_id:params.QuizId,username:user.name,score})
      });

      if (!response.ok) {
        throw new Error('Failed to save quiz response');
      }
      const responseData = await response.json();
      alert(responseData.message); 
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="100vw" bgGradient="linear(to-tr, teal.300, blue.500)">
      {loading ? (
        <Box>Loading...</Box>
      ) : (
        <QuestionCard
          questionData={{
            ...questionsData[currentQuestionIndex],
            index: currentQuestionIndex, // Add the index property to questionData
          }}
          selectedOption={selectedOptions[currentQuestionIndex]}
          questionCount={questionsData.length}
          onNext={() => setCurrentQuestionIndex(prevIndex => prevIndex + 1)}
          onPrevious={() => setCurrentQuestionIndex(prevIndex => prevIndex - 1)}
          onSubmit={handleSubmit}
          handleOptionChange={(value) => handleOptionChange(value, currentQuestionIndex)}
        />



      )}
    </Flex>
  );
};

export default QuizPage;
