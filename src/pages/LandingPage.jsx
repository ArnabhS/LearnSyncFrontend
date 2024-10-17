import React from "react";
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return <div className="  p-2 w-[98%] lg:w-[96%]  mx-auto mt-2 flex flex-col flex-1 justify-center  ">
    <div className=" flex items-center justify-center ">
     <div className="  w-[90%] lg:w-[65%]  mt-4 md:mt-12 lg:mt-12  h-fit text-wrap  ">

     {/* <div className="absolute inset-24 bg-[#8CC9E2] opacity-56 blur-[235.92px] flex items-center w-[80%] md:w-[60%] lg:w-[36%] mx-auto"></div> */}
      
       <h1 className='relative w-fit  text-center  font-bold !leading-snug tracking-widest text-[#DCECF2] text-3xl md:text-5xl lg:text-6xl mb-12'>

       <div className="absolute inset-24 bg-[#8CC9E2] opacity-56 blur-[235.92px] flex items-center w-[80%] md:w-[60%] lg:w-[36%] mx-auto"></div>
              An AI{' '}
                <span className='bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent'>Companion</span>{' '}
                That Understands You, So You Can Learn {' '}
                <span className='bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent'>  Smarter!</span>
              </h1>

      <div className=" flex justify-center">
        

        <Link to={"/chat"} className=" flex bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] p-2 w-[80%] md:w-[50%] lg:w-[36%] rounded-xl text-base lg:text-xl text-white justify-center" >
                        {" "}
                Start asking <MoveRight size={30} className=" ml-2" />
              </Link>
      </div>
      
       

    </div>
 
    </div>
    
    {/* <div className=" flex justify-between text-wrap text-[#00FFAE] p-1 mt-6 md:mt-14 lg:mt-18  w-full lg:w-[96%] mx-auto text-xs lg:text-sm leading-6 mb-8">
      <div>Your Personalized Learning Companion!</div>
      <div>Where AI Meets Empathy for Meaningful Growth</div>
      <div>Understanding You, Enhancing Learning</div>

    </div> */}

<div className="overflow-hidden w-[96%] mx-auto mt-6 md:mt-14 lg:mt-14 mb-8">
      <motion.div
        className="flex justify-between items-center text-[#00FFAE] p-1 w-max text-xs lg:text-base leading-6"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 30, 
          ease: 'linear',
        }}
      >
        <div className="mx-10 ">Your Personalized Learning Companion!</div>
        <div className="mx-10">Where AI Meets Empathy for Meaningful Growth</div>
        <div className="mx-10">Understanding You, Enhancing Learning</div>
        <div className="mx-10">Your Personalized Learning Companion!</div> {/* Repeat for smoothness */}
        <div className="mx-10">Where AI Meets Empathy for Meaningful Growth</div>
        <div className="mx-10">Understanding You, Enhancing Learning</div>
        <div className="mx-10 ">Your Personalized Learning Companion!</div>
        <div className="mx-10">Where AI Meets Empathy for Meaningful Growth</div>
        <div className="mx-10">Understanding You, Enhancing Learning</div>

      </motion.div>
    </div>

    
    <div className="  text-[#DCECF2] mt-0 md:mt-10 lg:mt-16 p-4 w-[98%] md:w-[84%] lg:w-[60%] mx-auto flex flex-col justify-center items-center mb-24">
      <h1 className=" text-xl font-semibold md:text-4xl lg:text-5xl mb-3 p-2 lg:p-4">What we want to {' '}
        <span className=" bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">Achieve!</span>  </h1>
      <p className=" text-md md:text-xl lg:text-2xl p-2 lg:p-4 text-left md:text-center leading-loose font-medium relative left-2 md:left-0 md:block italic">Our aim is to provide an {' '} <span className=" text-[#3EB1E1]">adaptive</span> learning experience tailored to each individual's unique strengths and needs. Through engaging conversations and {' '} <span className=" text-[#3EB1E1]">personalized</span> insights, we help users explore their potential, making learning enjoyable, effective, and meaningful. With AI at the core, we create a {' '} <span className=" text-[#3EB1E1]">supportive</span> environment where every learner can grow at their own pace!</p>
    </div>
  </div>;
}
