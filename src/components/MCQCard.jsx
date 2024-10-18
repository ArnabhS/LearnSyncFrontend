import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MCQCard() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle radio button selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="text-[#DCECF2] tracking-wider">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] flex flex-col justify-center items-center sm:max-w-full md:max-w-2xl h-auto py-6 gap-5 rounded-xl px-[10%] m-4 mt-[0%]">
          {/* Scrollable Entire Card */}
          <div className="flex flex-col gap-6 max-h-96 overflow-hidden relative">
            <div className="overflow-y-auto pr-4 hide-scroll-bar">
              {/* Question */}
              <h2 className="text-lg sm:text-xl font-semibold  mb-4">
                Do you prefer to plan your activities in advance rather than
                being spontaneous?
                {/* Long question example */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h2>

              {/* Options */}
              <div className="flex flex-col gap-4">
                <label className="flex gap-3 justify-start items-center py-1 cursor-pointer">
                  <input
                    type="radio"
                    name="planning"
                    value="always"
                    checked={selectedOption === "always"}
                    onChange={handleOptionChange}
                    className="custom-radio"
                  />
                  <p>Always; I like to have everything organized</p>
                </label>

                <label className="flex gap-3 justify-start items-center py-1 cursor-pointer">
                  <input
                    type="radio"
                    name="planning"
                    value="always"
                    checked={selectedOption === "always"}
                    onChange={handleOptionChange}
                    className="custom-radio"
                  />
                  <p>Always; I like to have everything organized</p>
                </label>

                <label className="flex gap-3 justify-start items-center py-1 cursor-pointer">
                  <input
                    type="radio"
                    name="planning"
                    value="always"
                    checked={selectedOption === "always"}
                    onChange={handleOptionChange}
                    className="custom-radio"
                  />
                  <p>Always; I like to have everything organized</p>
                </label>

                <label className="flex gap-3 justify-start items-center py-1 cursor-pointer">
                  <input
                    type="radio"
                    name="planning"
                    value="always"
                    checked={selectedOption === "always"}
                    onChange={handleOptionChange}
                    className="custom-radio"
                  />
                  <p>Always; I like to have everything organized</p>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-2">
          <div className="flex justify-center items-center bg-[#1D6F91] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
          <div className="flex justify-center items-center bg-[#D9D9D9] rounded-full w-3 h-3"></div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-12">
          <Link to={"/chat"} className="cursor-pointer">
            <button className="text-xl bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] px-6 py-2 rounded-md">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
