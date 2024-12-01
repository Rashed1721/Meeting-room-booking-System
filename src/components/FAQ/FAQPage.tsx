import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const FAQPage = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your booking up to 24 hours in advance for a full refund. Late cancellations may incur a fee.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, and bank transfers for payment.",
    },
    {
      question: "Can I change my booking time after confirmation?",
      answer:
        "Yes, you can change your booking time up to 12 hours in advance, subject to availability.",
    },
    {
      question: "Is customer support available 24/7?",
      answer:
        "Our customer support is available from 9 AM to 9 PM, Monday to Saturday.",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <article key={index} className="p-3 border-b border-gray-300">
            <div
              className={`flex justify-between items-center cursor-pointer text-lg font-medium ${
                isAccordionOpen === index ? "text-blue-500" : "text-gray-800"
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              <h2>{faq.question}</h2>
              {isAccordionOpen === index ? (
                <BiMinus className="text-xl" />
              ) : (
                <BiPlus className="text-xl" />
              )}
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isAccordionOpen === index
                  ? "max-h-screen opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
