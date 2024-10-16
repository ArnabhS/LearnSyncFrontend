import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" mt-4 mb-2 w-[98%] lg:w-[96%] mx-auto  flex items-center justify-between">
      <Link to={"/"} className=" text-white font-bold text-lg leading-6 lg:text-2xl bg-none">LearnSync</Link>
      {/* <button className=" bg-gradient-to-r from-[#8CC9E2] to-[#1D6F91] lg:py-2 lg:px-4 py-1 px-2  rounded-lg  text-white font-base leading-6 flex items-center justify-center text-sm lg:text-lg ">Login</button> */}

      <button className=" w-[20%] md:w-[12%] lg:w-[10%] py-1 lg:py-2  rounded-lg  bg-gradient-to-r from-[#8CC9E2] to-[#1D6F91] text-white ont-base  flex items-center justify-center text-sm lg:text-lg ">
      <Link to={"/login"} >
                {" "}
                Login
              </Link>
        </button>
    </div>
  )
}
