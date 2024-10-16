import React from "react";
import { MoveRight } from 'lucide-react';

export default function LandingPage() {
  return <div className="  p-2 w-[98%] lg:w-[96%]  mx-auto mt-2 flex flex-col flex-1 justify-center  ">
    <div className=" flex items-center justify-center">
     <div className=" w-[90%] lg:w-[50%] p-3 mt-4 md:mt-12 lg:mt-10  h-fit text-wrap  ">
      
       <h1 className='relative w-fit  text-balance  font-bold !leading-tight tracking-widest text-white text-3xl md:text-5xl lg:text-6xl mb-6'>
              An AI{' '}
                <span className='bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent'>Companion</span>{' '}
                That Understands You, So You Can Learn {' '}
                <span className='bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent'>  Smarter!</span>
              </h1>

      <div className=" flex justify-center">
        <button className=" flex bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] p-2 w-[80%] md:w-[50%] lg:w-[36%] rounded-xl text-base lg:text-xl text-white justify-center">Start asking <MoveRight size={30} className=" ml-2" /></button>
      </div>
      
       

    </div>
 
    </div>
    
    <div className=" flex justify-between text-wrap text-[#00FFAE] p-1 mt-6 md:mt-14 lg:mt-18  w-full lg:w-[96%] mx-auto text-xs lg:text-sm leading-6 mb-8">
      <div>Your Personalized Learning Companion!</div>
      <div>Where AI Meets Empathy for Meaningful Growth</div>
      <div>Understanding You, Enhancing Learning</div>

    </div>
    
    <div className=" text-white mt-0 md:mt-10 lg:mt-16 p-4 w-[96%] md:w-[84%] lg:w-[60%] mx-auto flex flex-col justify-center items-center mb-24">
      <h1 className=" text-2xl font-semibold md:text-4xl lg:text-5xl mb-3 p-2 lg:p-4">What we want to {' '}
        <span className=" bg-gradient-to-r from-[#8CC9E2] to-[#3EB1E1] bg-clip-text text-transparent">Achieve!</span>  </h1>
      <p className=" text-lg md:text-xl lg:text-2xl p-2 lg:p-4 text-left md:text-center leading-relaxed font-medium relative left-2 md:left-0 md:block">Our aim is to provide an {' '} <span className=" text-[#3EB1E1]">adaptive</span> learning experience tailored to each individual's unique strengths and needs. Through engaging conversations and {' '} <span className=" text-[#3EB1E1]">personalized</span> insights, we help users explore their potential, making learning enjoyable, effective, and meaningful. With AI at the core, we create a {' '} <span className=" text-[#3EB1E1]">supportive</span> environment where every learner can grow at their own pace!</p>
    </div>
  </div>;
}
