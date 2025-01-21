import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, HTMLMotionProps } from "framer-motion";

// Props for each FAQ item
export interface FAQProps {
  question: string; // The question to display
  answer: string | React.ReactNode; // The answer, which can be a string or JSX
  faqVal: FAQEnum; // The enum value representing the FAQ
}

// State and methods for the FAQ component
interface FAQState extends FAQProps {
  faq: FAQEnum; // Current open FAQ
  setFaq: (faq: FAQEnum) => void; // Function to set the current FAQ
}

// Enum to represent FAQ items
export const enum FAQEnum {
  NONE = "",
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
  Q5 = "Q5",
  Q6 = "Q6",
  Q7 = "Q7",
  Q8 = "Q8",
  Q9 = "Q9",
  Q10 = "Q10",
  Q11 = "Q11",
  Q12 = "Q12",
  Q13 = "Q13",
  Q14 = "Q14",
}

// FAQ Component
const FAQ: React.FC<FAQState> = ({ question, answer, faqVal, faq, setFaq }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }} // Animation for hover effect
      transition={{ duration: 0.3 }} // Smooth transition
      className="mt-4 pl-4 pr-4 rounded-md w-full sm:w-[45rem] py-4 flex flex-col justify-start items-start bg-gray"
    >
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => (faq === faqVal ? setFaq(FAQEnum.NONE) : setFaq(faqVal))}
      >
        <p className="text-lg font-medium text-white">{question}</p>
        {faq === faqVal ? (
          <IoIosArrowUp size="20" className="text-tertiary" />
        ) : (
          <IoIosArrowDown size="20" className="text-tertiary" />
        )}
      </div>

      {faq === faqVal && <p className="mt-4 text-white">{answer}</p>}
    </motion.div>
  );
};

export default FAQ;


