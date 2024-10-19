import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

export const CardsStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [answeredCount, setAnsweredCount] = useState(0); 
  const navigate = useNavigate(); 


  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex); // Set the selected option index

    
    setTimeout(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.push(newArray.shift()); 
        return newArray;
      });
      setSelectedOption(null); 
      setAnsweredCount((prevCount) => prevCount + 1); 
    }, 200); 
  };

  
  useEffect(() => {
    if (answeredCount >= items.length) {
      navigate("/chat"); 
    }
  }, [answeredCount, items.length, navigate]);

  return (
    <div className="flex justify-center items-center w-full md:w-[88%] mx-auto p-2 md:p-24 mt-6 mb-12 bg-transparent  
    ">
      <div className="relative h-60 w-[98%] mx-auto md:h-60 py-12 md:w-[86%] lg:w-[70%] mb-12 bg-transparent rounded-xl   
      ">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] w-[98%] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * 1.2 * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              opacity: index === 0 ? 1 : 0.26, 
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              <p>{card.question}</p>
              {card.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={`block w-full text-left mt-2 p-2 rounded-lg ${
                    selectedOption === optionIndex
                      ? "bg-blue-500 text-white" 
                      : " dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                  onClick={() => handleOptionClick(optionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
