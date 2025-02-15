import { useContext, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { DarkContext } from "../darkLight/darkContext.jsx"

// const faqItems = [
//   {
//     title: "If I subscribe and don't achieve results, is there a guarantee?",
//     content:
//       "Chemotherapy package guarantee! If you subscribed to the 3-month package, followed the programs throughout the subscription period, and adhered to the instructions but did not see results or any difference, the full amount will be refunded.",
//   },
//   {
//     title: "Currently, my financial situation is not the best... Is there a solution?",
//     content:
//       "Yes, we offer flexible payment options and easy installment plans to help you achieve your goals.",
//   },
//   {
//     title: "After payment... What should I do?",
//     content:
//       "After completing the payment, detailed instructions will be sent to your email with the steps to get started.",
//   },
//   {
//     title: "How does the follow-up process work?",
//     content:
//       "We provide continuous follow-up through our online platform, with weekly reports and regular consultation sessions.",
//   },
// ];
const faqData = [
  {
    question: "What types of training programs do you offer?",
    answer: "We offer online training programs for calisthenics, CrossFit, bodybuilding, and weight loss, designed for all fitness levels."
  },
  {
    question: "Are the training programs suitable for beginners?",
    answer: "Yes! Our programs cater to all levels, from beginners to advanced athletes, with step-by-step guidance and progress tracking."
  },
  {
    question: "Do I need any equipment for the workouts?",
    answer: "It depends on the program. Some workouts require minimal or no equipment, while others may use dumbbells, resistance bands, or a pull-up bar."
  },
  {
    question: "How do I access the training sessions?",
    answer: "Once you finish in get plan, you'll contact to the coache ,then you can watch workout videos, and diet plan"
  },
  {
    question: "Can I train at home, or do I need a gym?",
    answer: "You can train anywhere! Our workouts are designed for both home and gym settings, depending on your preference and available equipment."
  },
  {
    question: "Will I receive a personalized training plan?",
    answer: "Yes, we offer personalized training plans based on your goals, fitness level, and available equipment."
  },
  {
    question: "Do you provide nutritional guidance?",
    answer: "Yes, we offer nutrition tips and meal plans to complement your training and help you achieve your fitness goals."
  },
  {
    question: "Is there a community or support group?",
    answer: "Absolutely! You'll have access to a community of like-minded individuals and trainers for motivation and support."
  },
  {
    question: "How do I get started?",
    answer: "Simply choose your training program, and Choose the package you prefer then start your fitness journey today!"
  }
];



const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const { isDark } = useContext(DarkContext);

  return (
    <div className="border-b-[1px] border-[#575757] rounded-xl py-4 ">
      <button
        className="w-full py-5 px-4 flex items-center justify-between text-left  transition-colors duration-200"
        onClick={onClick}
      >
        <span className={`w-[90%] text-[25px] max-md:text-[22px] max-sm:text-[20px] font-tajawal font-bold ${isDark ? "text-white" : "text-black" }  text-gray-800`}>{question}</span>
        <Plus
          className={`w-[3%] h-[3%] max-sm:w-[5%] max-sm:h-[5%] text-secondary transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className={` p-4 text-left  ${isDark ? "bg-[#1e252ff9]" : "bg-gray-50" } `}>
          <p className={` ${isDark ? "text-gray-200" : "text-gray-600" } text-[20px] max-md:text-[18px] max-sm:text-[16px] font-tajawal font-medium  leading-relaxed`}>{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const { isDark } = useContext(DarkContext);


  return (
    <div className={` w-full py-20  ${isDark ? "bg-PrimaryBg" : "bg-white" } flex flex-col items-center justify-center p-6  border-t-[1px]  border-[#cccaca]`}>
      <div className="w-[95%] flex justify-center flex-col items-center ">
        <div className="mb-8 w-full text-cenetr">
          <h1 className={`text-[4rem] max-sm:text-[3rem]  ${isDark ? "text-white" : "text-black" }  text-center font-bold mb-2 uppercase tracking-wide font-anton`} >have any questions?</h1> 
        </div>
        <div className={`box w-[80%] max-lg:w-[90%] max-md:w-[100%] rounded-2xl border-[1px] border-[#575757] border-b-0  shadow-xl ${isDark ? "bg-PrimaryBg" : "bg-white" } `}>
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default FAQ;
