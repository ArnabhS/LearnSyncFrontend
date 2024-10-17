import React from "react";
import { Link } from "react-router-dom";



export default function MCQCard() {
  return (
    <div className="text-[#DCECF2] tracking-wider">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] flex flex-col justify-center items-center md:max-w-2xl h-[450px] gap-5 rounded-xl px-20 m-4">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold ">
              Do you prefer to plan your activities in advance rather than being
              spontaneous?
            </h2>
            <div className="sm:flex flex-row">
              <div>
                <div className="flex gap-3 justify-start items-center py-2">
                  <input type="checkbox" name="" id="" />
                  <p>Always; I like to have everything organized</p>
                </div>
                <div className="flex gap-3 justify-start items-center py-2">
                  <input type="checkbox" name="" id="" />
                  <p>Always; I like to have everything organized</p>
                </div>
              </div>
              <div>
                <div className="flex gap-3 justify-start items-center py-2">
                  <input type="checkbox" name="" id="" />
                  <p>Always; I like to have everything organized</p>
                </div>
                <div className="flex gap-3 justify-start items-center py-2">
                  <input type="checkbox" name="" id="" />
                  <p>Always; I like to have everything organized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <div className="flex justify-center items-center bg-[#1D6F91] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Link to={"/chat"} className="cursor-pointer">
          <button className="text-xl bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] px-6 py-2 rounded-md">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
