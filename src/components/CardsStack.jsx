import { useState } from "react";
import { motion } from "framer-motion";

export const CardsStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  // Handle option click
  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex); // Set the selected option index

    // Delay to show the blue highlight before flipping
    setTimeout(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.push(newArray.shift()); // Move the first element to the back
        return newArray;
      });
      setSelectedOption(null); // Reset the selected option for the next card
    }, 200);
  };

  return (
    <div className=" flex justify-center items-center w-full md:w-[88%] mx-auto p-2 md:p-24 mt-6 mb-12">
    <div className="relative h-60 w-[98%] mx-auto md:h-60 py-12 md:w-[86%] lg:w-[70%] mb-12">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] w-[98%]  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index *1.2* -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR ,
            zIndex: cards.length - index,
            opacity: index === 0 ? 1 : 0.26, // The top card is fully opaque
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
                    ? "bg-blue-500 text-white" // Highlight selected option in blue
                    : "bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600"
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
