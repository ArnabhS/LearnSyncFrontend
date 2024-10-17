import React from "react";
import robotImage from '../assets/Robot.svg';
import { SendHorizonal, Volume2 } from "lucide-react";

import TextareaAutosize from 'react-textarea-autosize'

export default function ChatBotPage() {
  return (
    <div className=" p-2 w-[98%] lg:w-[96%]  mx-auto mt-2 flex flex-col justify-center">



    <div className="min-h-screen  text-white flex flex-col py-2">
      
      <div className="mb-6 p-1 flex  justify-center ">
        <img src={robotImage} alt="Robot" className="h-20 w-20" />
      </div>

      <div className="  w-full md:w-[96%] lg:w-[90%] mx-auto p-1 md:p-2 flex justify-between gap-1 space-x-2 text-balance  mb-10">
      

        <div className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4  rounded-lg  hover:bg-opacity-50 w-[34.5%] lg:w-[25%] md:w-[25%] transition ease-in-out duration-300 text-sm font-base lg:text-lg md:font-semibold 
        shadow-2xl  shadow-[#00FFAE] inset-10">
          <p className="text-center">
            <span className="text-[#DCECF2]">Your {' '} <span className=" text-[#00FFAE]"> Personalized </span> Learning {' '} <span className=" text-[#00FFAE]"> Companion!</span></span>
          </p>
        </div>

        <div className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4  rounded-lg  hover:bg-opacity-50 w-[34.5%] md:w-[25%] lg:w-[25%] transition ease-in-out duration-300 text-sm font-base md:font-semibold lg:text-lg shadow-2xl  shadow-[#00FFAE] inset-10">
          <p className="text-center">
            <span className="text-[#DCECF2]">Where {' '}<span className=" text-[#00FFAE]"> AI </span>Meets {' '}<span className=" text-[#00FFAE]">Empathy</span> for Meaningful {' '}<span className=" text-[#00FFAE]">Growth</span> </span>
          </p>
        </div>

        <div className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4  rounded-lg  hover:bg-opacity-50 w-[34.5%] md:w-[25%] lg:w-[25%] transition ease-in-out duration-300 text-sm font-base md:font-semibold lg:text-lg font-base shadow-2xl  shadow-[#00FFAE] inset-10 ">
          <p className="text-center">
            <span className="text-[#DCECF2]">Understanding {' '}<span className=" text-[#00FFAE]">You</span> , Enhancing {' '}<span className=" text-[#00FFAE]"> Learning</span></span>
          </p>
        </div>

      </div>


        <div className=" mt-8 ">

          <div className=" flex justify-center">
            <h2 className="text-2xl font-base text-[#DCECF2] md:text-3xl mb-6">
        What can I help <span className="bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">with!</span>
      </h2>
          </div>
    
      

      
      <div className="flex w-[90%] md:w-[60%] mx-auto rounded-lg   mb-8 bg-[#5E808DB5]  ">

      

<TextareaAutosize

onKeyDown={(e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()

    const message = {
      id: nanoid(),
      isUserMessage: true,
      text: input,
    }

    sendMessage(message)
  }
}}




  minRows={1} placeholder="Ask" className="w-full  bg-transparent  text-gray-300 p-4   rounded-lg border-none focus:outline-none" />




        <button className="  relative right-2 p-2">
          <SendHorizonal className=" text-[#060E12]"/>
        </button>

        
      </div>

      {/* Response box */}
      <div className=" w-[90%] md:w-[60%] mx-auto  bg-[#5E808DB5] p-4 rounded-lg shadow-lg">
        <p className="text-gray-300">
          However, it is important to remember that these disorders can present in a variety of
          ways and this assessment is based on a limited set of questions and answers. If there
          are concerns about any potential disorders, it is always best to consult a medical
          professional for a full evaluation.
        </p>
        
        <div className="flex justify-end mt-2">
          <span className="text-gray-400">
            <Volume2  className="text-[#060E12]"/>
          </span>
        </div>
      </div>
    </div>
    </div>
    </div>


      

   
  );
}
