import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" mt-4 mb-2 w-[98%] lg:w-[96%] mx-auto  flex items-center justify-between">
      <Link to={"/"} className=" text-white font-bold text-lg leading-6 lg:text-2xl bg-none">LearnSync</Link>
      
      <Link to={"/login"}  className=" w-[20%] md:w-[12%] lg:w-[8%] py-1 lg:py-1  rounded-lg  bg-gradient-to-r from-[#8CC9E2] to-[#1D6F91] text-white ont-base  flex items-center justify-center text-sm lg:text-lg ">
                {" "}
                Login
              </Link>
       
    </div>
  )
}
