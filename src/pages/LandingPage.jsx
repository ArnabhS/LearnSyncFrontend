import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CardsStack } from "../components/CardsStack";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate(); 

  
  // Declare the MCQ items array
  const items = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      name: "MCQ 1",
      designation: "Geography",
    },
    {
      id: 2,
      question: "Which planet is closest to the sun?",
      options: ["Earth", "Venus", "Mercury", "Mars"],
      name: "MCQ 2",
      designation: "Astronomy",
    },
    {
      id: 3,
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      name: "MCQ 3",
      designation: "Biology",
    },
    {
      id: 4,
      question: "Which language is primarily used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      name: "MCQ 4",
      designation: "Programming",
    },
    {
      id: 5,
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
      name: "MCQ 5",
      designation: "Art",
    },
  ];

  // Function to handle the completion of the MCQ cards
  const handleMCQCompletion = () => {
    setIsModalOpen(false); // Close the modal
    navigate("/chat"); // Redirect to chat page
  };

  return (
    <div className="p-2 w-[98%] lg:w-[96%] mx-auto mt-2 flex flex-col flex-1 justify-center">
      {/* Existing layout */}
      <div className="flex items-center justify-center">
        <div className="relative w-[90%] lg:w-[65%] mt-4 md:mt-12 lg:mt-12 h-fit text-wrap">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#8CC9E2] rounded-full blur-3xl opacity-45 z-0"></div>

          <h1 className="relative w-fit text-center font-bold !leading-snug tracking-widest text-[#DCECF2] text-3xl md:text-5xl lg:text-6xl mb-12">
            An AI{" "}
            <span className="bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">
              Companion
            </span>{" "}
            That Understands You, So You Can Learn{" "}
            <span className="bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">
              {" "}
              Smarter!
            </span>
          </h1>

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)} // Open modal on click
              className="flex bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] p-2 w-[50%] md:w-[36%] lg:w-[26%] rounded-xl text-sm md:text-base lg:text-xl text-white justify-center items-center"
            >
              Start asking{" "}
              <MoveRight size={20} className="block md:hidden ml-2" />
              <MoveRight size={30} className="md:block hidden ml-2" />
            </button>
          </div>
        </div>
      </div>


      <div className="overflow-hidden w-[96%] mx-auto mt-6 md:mt-14 lg:mt-14 mb-8">
         <motion.div
          className="flex justify-between items-center text-[#00FFAE] p-1 w-max text-xs lg:text-base leading-6"
          initial={{ x: 0 }} // Ensure the text is visible immediately
          animate={{ x: ["0%", "-100%"] }} // Start moving the text from the visible position
          transition={{
            repeat: Infinity,
            duration: 50, // Speed for smooth scrolling
            ease: "linear",
            delay: 1, // Small delay after page load if needed
          }}
          whileHover={{ x: 0 }} // Pause on hover
        >
          <div className="mx-10">Your Personalized Learning Companion!</div>
          <div className="mx-10">
            Where AI Meets Empathy for Meaningful Growth
          </div>
          <div className="mx-10">Understanding You, Enhancing Learning</div>
          <div className="mx-10">Your Personalized Learning Companion!</div>
          {/* Repeat for smoothness */}
          <div className="mx-10">
            Where AI Meets Empathy for Meaningful Growth
          </div>
          <div className="mx-10">Understanding You, Enhancing Learning</div>
          <div className="mx-10">Your Personalized Learning Companion!</div>
          <div className="mx-10">
            Where AI Meets Empathy for Meaningful Growth
          </div>
          <div className="mx-10">Understanding You, Enhancing Learning</div>
        </motion.div>
      </div>

    
    <div className="  text-[#DCECF2] mt-0 md:mt-10 lg:mt-16 p-4 w-[98%] md:w-[84%] lg:w-[60%] mx-auto flex flex-col justify-center items-center mb-24">
      <h1 className=" text-xl font-semibold md:text-4xl lg:text-4xl mb-3 p-2 lg:p-4">What we want to {' '}
        <span className=" bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">Achieve!</span>  </h1>
      <p className=" text-md md:text-xl lg:text-2xl p-2 lg:p-4 text-left md:text-center leading-loose font-light relative left-2 md:left-0 md:block italic">Our aim is to provide an {' '} <span className=" text-[#3EB1E1]">adaptive</span> learning experience tailored to each individual's unique strengths and needs. Through engaging conversations and {' '} <span className=" text-[#3EB1E1]">personalized</span> insights, we help users explore their potential, making learning enjoyable, effective, and meaningful. With AI at the core, we create a {' '} <span className=" text-[#3EB1E1]">supportive</span> environment where every learner can grow at their own pace!</p>
    </div>
    
    <div>
       {/* MCQ CardStack */}
       <div className="mt-10 mb-10 bg-purple-0">
        <CardsStack items={items} /> 
      </div>
    </div>
  {/* </div>

  );

} */}


      

      {/* Other content goes here... */}

      {/* MCQ Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center  bg-zinc-950 bg-opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative bg-zinc-950 w-[90%] rounded-lg shadow-xl">

          <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-red-600"
            >
              Close
            </button>
            
            {/* CardsStack Component */}
            <CardsStack items={items} onComplete={handleMCQCompletion} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
