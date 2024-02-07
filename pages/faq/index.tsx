import Accordion from "@/Components/Templates/Faq/Accordion";
import Header from "@/Components/Templates/Faq/Header";
import axios from "axios";
import { useEffect, useState } from "react";

interface FAQProps {
  _id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [questions, setQuestions] = useState<FAQProps[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get("/api/questions");
      setQuestions(res.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <Header />
      {questions.map((question) => (
        <Accordion
          question={question.question}
          answer={question.answer}
          key={question._id}
        />
      ))}
    </div>
  );
};
export default FAQ;
